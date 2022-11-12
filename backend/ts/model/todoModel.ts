import { Collection, Db, MongoClient } from "mongodb";

interface TodoType {
    todoText: string;
}

let database: Db;
let todoCollection: Collection<TodoType>;

export function connectToDatabase() {
    const databaseURL = process.env.DATABASE_URL;

    if (!databaseURL) return;

    const mongoDB = new MongoClient(databaseURL);

    database = mongoDB.db("DeployDatabase");
    todoCollection = database.collection<TodoType>("todo");

    console.log("Server is connected to the mongoDB database");
}

export async function addTodoToDatabase(todoText: string) {
    await todoCollection.insertOne({ todoText });

    console.log(`Todo is added to the database: ${todoText}`);
}

export async function getAllTodos() {
    const todos = todoCollection.find({});
    const allTodos = await todos.toArray();

    return allTodos;
}
