"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenController = void 0;
class ShortenController {
    shortenService;
    constructor(shortenService) {
        this.shortenService = shortenService;
    }
    create = async (req, reply) => {
        const { url } = req.body;
        const result = await this.shortenService.generateShortUrl(url);
        return reply.status(201).send(result);
    };
    redirect = async (req, reply) => {
        const { shortcode } = req.params;
        const result = await this.shortenService.getOriginalUrl(shortcode);
        return reply.redirect(result.url);
    };
}
exports.ShortenController = ShortenController;
//# sourceMappingURL=shorten.controller.js.map