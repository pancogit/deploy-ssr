"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todoModel_1 = require("../model/todoModel");
exports.router = (0, express_1.Router)();
// all app routes
exports.router.get("/", (req, res) => {
    res.render("home", { heading: "Home" });
});
exports.router.get("/todo", (req, res) => {
    res.render("todo", { heading: "Todo Example" });
});
exports.router.get("/about", (req, res) => {
    res.render("about", { heading: "About" });
});
// add todo item to the database
exports.router.post("/add-todo", (req, res) => {
    const todo = req.body.todo;
    (0, todoModel_1.addTodoToDatabase)(todo);
    res.json({ todoAdded: todo });
});
// get all todos from database
exports.router.get("/get-all-todos", async (req, res) => {
    const allTodos = await (0, todoModel_1.getAllTodos)();
    res.json({ allTodos });
});
// 404 page
exports.router.get("*", (req, res) => {
    res.render("404", { heading: "404" });
});
//# sourceMappingURL=routes.js.map