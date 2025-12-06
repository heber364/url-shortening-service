import { FastifyReply, FastifyRequest } from 'fastify';
import { ShortenService } from '../services/shorten.service';
import { CreateShortenBody, RedirectShortenParams } from '../interfaces/shorten.interface';
export declare class ShortenController {
    private shortenService;
    constructor(shortenService: ShortenService);
    create: (req: FastifyRequest<{
        Body: CreateShortenBody;
    }>, reply: FastifyReply) => Promise<never>;
    redirect: (req: FastifyRequest<{
        Params: RedirectShortenParams;
    }>, reply: FastifyReply) => Promise<never>;
}
//# sourceMappingURL=shorten.controller.d.ts.map