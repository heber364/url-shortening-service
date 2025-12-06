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
        const result = await this.shortenService.create(url);
        return reply.status(201).send(result);
    };
    redirect = async (req, reply) => {
        const { shortcode } = req.params;
        const result = await this.shortenService.get(shortcode);
        return reply.redirect(result.url);
    };
    update = async (req, reply) => {
        const { shortcode } = req.params;
        const result = await this.shortenService.update(shortcode);
        return reply.status(200).send(result);
    };
}
exports.ShortenController = ShortenController;
//# sourceMappingURL=shorten.controller.js.map