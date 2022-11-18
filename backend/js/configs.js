"use strict";
// get all configurations from .env file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverAddress = exports.serverPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// load .env file into process.env
// use different environment variables files for development and production mode
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
// get server configurations
exports.serverPort = Number(process.env.PORT) || 5000;
exports.serverAddress = process.env.SERVER_ADDRESS || "localhost";
//# sourceMappingURL=configs.js.map