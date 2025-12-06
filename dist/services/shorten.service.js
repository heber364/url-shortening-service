"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenService = void 0;
class ShortenService {
    async generateShortUrl(originalUrl) {
        const shortcode = Math.random().toString(36).substring(7);
        return {
            original: originalUrl,
            shortcode: shortcode
        };
    }
    async getOriginalUrl(shortcode) {
        const url = "";
        return { url };
    }
}
exports.ShortenService = ShortenService;
//# sourceMappingURL=shorten.service.js.map