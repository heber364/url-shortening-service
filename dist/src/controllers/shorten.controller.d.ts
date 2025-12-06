import { FastifyReply, FastifyRequest } from 'fastify';
import { ShortenService } from '../services/shorten.service';
import { ShortenBody, ShortenParams } from '../interfaces/shorten.interface';
export declare class ShortenController {
    private shortenService;
    constructor(shortenService: ShortenService);
    create: (req: FastifyRequest<{
        Body: ShortenBody;
    }>, reply: FastifyReply) => Promise<never>;
    redirect: (req: FastifyRequest<{
        Params: ShortenParams;
    }>, reply: FastifyReply) => Promise<never>;
    update: (req: FastifyRequest<{
        Params: ShortenParams;
    }>, reply: FastifyReply) => Promise<never>;
}
//# sourceMappingURL=shorten.controller.d.ts.map