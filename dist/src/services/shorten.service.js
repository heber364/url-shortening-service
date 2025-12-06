"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenService = void 0;
const sqids_1 = require("../utils/sqids");
class ShortenService {
    async create(originalUrl) {
        const shortcode = (0, sqids_1.generateShortCode)(2);
        return {
            original: originalUrl,
            shortcode: shortcode
        };
    }
    async get(shortcode) {
        /**
         * TODO:
         * - [] Buscar url original e adicionar contador
         */
        const url = "https://www.youtube.com";
        return { url };
    }
    async update(shortcode) {
    }
    async delete(shortcode) {
    }
    async getStats(shortcode) {
    }
}
exports.ShortenService = ShortenService;
//# sourceMappingURL=shorten.service.js.map