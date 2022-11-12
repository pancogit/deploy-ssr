import { Router, Request, Response } from "express";
import { addTodoToDatabase, getAllTodos } from "../model/todoModel";

export const router = Router();

// all app routes
router.get("/", (req: Request, res: Response) => {
    res.render("home", { heading: "Home" });
});

router.get("/todo", (req: Request, res: Response) => {
    res.render("todo", { heading: "Todo Example" });
});

router.get("/about", (req: Request, res: Response) => {
    res.render("about", { heading: "About" });
});

// add todo item to the database
router.post("/add-todo", (req: Request, res: Response) => {
    const todo = req.body.todo;

    addTodoToDatabase(todo);

    res.json({ todoAdded: todo });
});

// get all todos from database
router.get("/get-all-todos", async (req: Request, res: Response) => {
    const allTodos = await getAllTodos();

    res.json({ allTodos });
});

// 404 page
router.get("*", (req: Request, res: Response) => {
    res.render("404", { heading: "404" });
});
