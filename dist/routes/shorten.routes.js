"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenRoutes = shortenRoutes;
const shorten_service_1 = require("../services/shorten.service");
const shorten_controller_1 = require("../controllers/shorten.controller");
async function shortenRoutes(app) {
    const shortenService = new shorten_service_1.ShortenService();
    const shortenController = new shorten_controller_1.ShortenController(shortenService);
    app.post('/', shortenController.create);
    app.get('/:shortcode', shortenController.redirect);
}
//# sourceMappingURL=shorten.routes.js.map