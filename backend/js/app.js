"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/routes");
const todoModel_1 = require("./model/todoModel");
// load .env file into process.env
dotenv_1.default.config();
// create express application server
const app = (0, express_1.default)();
// use ejs view engine and set path to the views to the frontend folder
app.set("view engine", "ejs");
app.set("views", "frontend/views");
// server static css / javascript files for frontend from the backend server
// serve files from frontend/ folder
app.use(express_1.default.static("frontend"));
// parse incoming http post requests bodies as json objects
app.use(express_1.default.json());
const port = Number(process.env.PORT) || 3000;
const address = process.env.USE_REMOTE_ADDRESS === "true"
    ? process.env.SERVER_REMOTE_ADDRESS || "0.0.0.0"
    : process.env.SERVER_LOCAL_ADDRESS || "localhost";
// listen to the server port and address
app.listen(port, address, () => {
    console.log(`Server is listening on ${address}:${port}`);
});
// set all routes
app.use("/", routes_1.router);
(0, todoModel_1.connectToDatabase)();
//# sourceMappingURL=app.js.map