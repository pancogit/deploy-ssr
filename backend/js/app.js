"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/routes");
const todoModel_1 = require("./model/todoModel");
const configs_1 = require("./configs");
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
// listen to the server port and address
app.listen(configs_1.serverPort, configs_1.serverAddress, () => {
    console.log(`Server is listening on ${configs_1.serverAddress}:${configs_1.serverPort}`);
});
// set all routes
app.use("/", routes_1.router);
(0, todoModel_1.connectToDatabase)();
//# sourceMappingURL=app.js.map