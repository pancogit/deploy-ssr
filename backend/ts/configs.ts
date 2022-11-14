// get all configurations from .env file

import dotenv from "dotenv";

// load .env file into process.env
dotenv.config();

// get server configurations
export const serverPort = Number(process.env.PORT) || 3000;

export const serverAddress =
    process.env.USE_SERVER_REMOTE_ADDRESS === "true"
        ? process.env.SERVER_REMOTE_ADDRESS || "0.0.0.0"
        : process.env.SERVER_LOCAL_ADDRESS || "localhost";
