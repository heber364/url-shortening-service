import { FastifyReply, FastifyRequest } from 'fastify';
import { ShortenService } from '../services/shorten.service';
import { ShortenBody, ShortenParams } from '../interfaces/shorten.interface'

export class ShortenController {
    constructor(private shortenService: ShortenService) { }

    create = async (
        req: FastifyRequest<{ Body: ShortenBody }>,
        reply: FastifyReply
    ) => {
        const { url } = req.body as { url: string };

        const result = await this.shortenService.create(url);

        return reply.status(201).send(result);
    };

    get = async (
        req: FastifyRequest<{ Params: ShortenParams }>,
        reply: FastifyReply
    ) => {
        const { shortCode } = req.params;

        const result = await this.shortenService.get(shortCode);

        if (!result) return reply.status(404).send();

        return reply.status(200).send(result)
    };

    redirect = async (
        req: FastifyRequest<{ Params: ShortenParams }>,
        reply: FastifyReply
    ) => {
        const { shortCode } = req.params;

        const result = await this.shortenService.get(shortCode);

        if (!result) return reply.status(404).send();

        return reply.redirect(result.url);
    };

    update = async (
        req: FastifyRequest<{ Body: ShortenBody, Params: ShortenParams }>,
        reply: FastifyReply
    ) => {
        const { shortCode } = req.params;
        const { url } = req.body;

        const result = await this.shortenService.update(shortCode, url);

        if (!result) return reply.status(404).send();

        return reply.status(200).send(result)


    };

    getStats = async (
        req: FastifyRequest<{ Params: ShortenParams }>,
        reply: FastifyReply
    ) => {
        const { shortCode } = req.params;

        const result = await this.shortenService.getStats(shortCode);

        if (!result) return reply.status(404).send();

        return reply.status(200).send(result)
    };

    delete = async (
        req: FastifyRequest<{ Params: ShortenParams }>,
        reply: FastifyReply
    ) => {
        const { shortCode } = req.params;

        const result = await this.shortenService.delete(shortCode);

        if (!result) return reply.status(404).send();

        return reply.status(204).send(result)
    };
}