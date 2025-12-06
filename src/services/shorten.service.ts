import { generateShortCode } from '../utils/sqids';
import { PrismaClient } from '../generated/client';

export class ShortenService {

    constructor(private prisma: PrismaClient) { }

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
        const shorten = await this.prisma.shorten.findUnique({
            where: {
                shortCode: shortCode
            }
        });

        if (shorten) {
            await this.prisma.shorten.update({
                where: {
                    id: shorten.id
                },
                data: {
                    accessCount: {
                        increment: 1
                    }
                }
            });
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

        return shortenUpdate
    }

    async delete(shortCode: string) {
        const shorten = await this.prisma.shorten.findUnique({
            where: {
                shortCode: shortCode
            }
        });

        if(shorten){
            await this.prisma.shorten.delete({
                where: {
                    id: shorten.id 
                }
            })

            return true
        }

        return false

    }

    async getStats(shortCode: string) {
        const shorten = await this.prisma.shorten.findUnique({
            where: {
                shortCode: shortCode
            }
        });

        return shorten
    }

}

