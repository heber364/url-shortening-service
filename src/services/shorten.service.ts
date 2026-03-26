import { generateShortCode } from '../utils/sqids';
import { PrismaClient } from '../generated/client';
import { RedisClientType } from 'redis';

export class ShortenService {

    constructor(
        private prisma: PrismaClient,
        private redis: RedisClientType
    ) { }

    async create(originalUrl: string) {
        const result = await this.prisma.$queryRaw<[{ nextval: string }]>`
            SELECT nextval('"Shorten_id_seq"')::text
        `;

        const nextId = Number(result[0].nextval);

        const shortCode = generateShortCode(nextId);

        const shorten = await this.prisma.shorten.create({
            data: {
                id: nextId,
                url: originalUrl,
                shortCode: shortCode
            },
        })

        return shorten

    }

    async get(shortCode: string) {
        const cacheKey = `shorten:${shortCode}`;
        const cachedUrl = await this.redis.get(cacheKey)

        if (cachedUrl) {
            await this.incrementAccessCount(shortCode)
            return { url: cachedUrl }
        }

        const shorten = await this.prisma.shorten.findUnique({
            where: {
                shortCode: shortCode
            }
        });

        if (shorten) {
            await this.redis.set(cacheKey, shorten.url, {
                EX: 3600
            });
            await this.incrementAccessCount(shortCode)
        }

        return shorten
    }

    async update(shortCode: string, newOriginalUrl: string) {
        const shortenUpdate = await this.prisma.shorten.update({
            where: {
                shortCode: shortCode
            },
            data: {
                url: newOriginalUrl
            }
        })

        await this.redis.del(`shorten:${shortCode}`);
        await this.redis.del(`stats:${shortCode}`);

        return shortenUpdate
    }

    async delete(shortCode: string) {
        const shorten = await this.prisma.shorten.findUnique({
            where: {
                shortCode: shortCode
            }
        });

        if (shorten) {
            await this.prisma.shorten.delete({
                where: {
                    id: shorten.id
                }
            })

            await this.redis.del(`shorten:${shortCode}`);
            await this.redis.del(`stats:${shortCode}`);

            return true
        }

        return false

    }

    async getStats(shortCode: string) {
        const cacheKey = `stats:${shortCode}`;
        const cached = await this.redis.get(cacheKey);

        if (cached) {
            return JSON.parse(cached);
        }

        const shorten = await this.prisma.shorten.findUnique({
            where: {
                shortCode: shortCode
            }
        });

        if (shorten) {
            await this.redis.set(cacheKey, JSON.stringify(shorten), {
                EX: 60
            });
        }

        return shorten;
    }

    private async incrementAccessCount(shortCode: string) {
        await this.prisma.shorten.update({
            where: { shortCode },
            data: { accessCount: { increment: 1 } }
        });
    }

}

