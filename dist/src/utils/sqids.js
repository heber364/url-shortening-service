"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeShortCode = exports.generateShortCode = exports.sqids = void 0;
const sqids_1 = __importDefault(require("sqids"));
const ALPHABET = process.env.SQIDS_ALPHABET || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
exports.sqids = new sqids_1.default({
    alphabet: ALPHABET,
    minLength: 6,
});
const generateShortCode = (id) => {
    return exports.sqids.encode([id]);
};
exports.generateShortCode = generateShortCode;
const decodeShortCode = (code) => {
    const decoded = exports.sqids.decode(code);
    return decoded[0];
};
exports.decodeShortCode = decodeShortCode;
//# sourceMappingURL=sqids.js.map