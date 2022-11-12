import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import { connectToDatabase } from "./model/todoModel";
import { serverAddress, serverPort } from "./configs";

// load .env file into process.env
dotenv.config();

// create express application server
const app = express();

// use ejs view engine and set path to the views to the frontend folder
app.set("view engine", "ejs");
app.set("views", "frontend/views");

// server static css / javascript files for frontend from the backend server
// serve files from frontend/ folder
app.use(express.static("frontend"));

// parse incoming http post requests bodies as json objects
app.use(express.json());

// listen to the server port and address
app.listen(serverPort, serverAddress, () => {
    console.log(`Server is listening on ${serverAddress}:${serverPort}`);
});

// set all routes
app.use("/", router);

connectToDatabase();
