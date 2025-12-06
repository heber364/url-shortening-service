"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const shorten_routes_1 = require("./routes/shorten.routes");
exports.app = (0, fastify_1.default)({ logger: true });
// Registrar rotas
exports.app.register(shorten_routes_1.shortenRoutes, { prefix: '/shorten' });
//# sourceMappingURL=app.js.map