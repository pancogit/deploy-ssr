"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = exports.addTodoToDatabase = exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
let database;
let todoCollection;
function connectToDatabase() {
    const databaseURL = process.env.DATABASE_URL;
    if (!databaseURL)
        return;
    const mongoDB = new mongodb_1.MongoClient(databaseURL);
    database = mongoDB.db("DeployDatabase");
    todoCollection = database.collection("todo");
    console.log("Server is connected to the mongoDB database");
}
exports.connectToDatabase = connectToDatabase;
async function addTodoToDatabase(todoText) {
    await todoCollection.insertOne({ todoText });
    console.log(`Todo is added to the database: ${todoText}`);
}
exports.addTodoToDatabase = addTodoToDatabase;
async function getAllTodos() {
    const todos = todoCollection.find({});
    const allTodos = await todos.toArray();
    return allTodos;
}
exports.getAllTodos = getAllTodos;
//# sourceMappingURL=todoModel.js.map