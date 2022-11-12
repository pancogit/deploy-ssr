"use strict";
// get all configurations from .env file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverAddress = exports.serverPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// load .env file into process.env
dotenv_1.default.config();
// get server configurations
exports.serverPort = Number(process.env.SERVER_PORT) || 3000;
exports.serverAddress = process.env.USE_SERVER_REMOTE_ADDRESS === "true"
    ? process.env.SERVER_REMOTE_ADDRESS || "0.0.0.0"
    : process.env.SERVER_LOCAL_ADDRESS || "localhost";
//# sourceMappingURL=configs.js.map