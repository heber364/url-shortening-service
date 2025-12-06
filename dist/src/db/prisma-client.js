"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("../generated/client");
const globalForPrisma = globalThis;
exports.prismaClient = globalForPrisma.prisma || new client_1.PrismaClient({ log: [{ level: 'query', emit: 'event' }] });
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = exports.prismaClient;
//# sourceMappingURL=prisma-client.js.map