import { Router } from "express";
import shortid from "shortid";
import { verifyTodoBody } from "./../middleware/verifyTodoBody";
import { getUserFromToken, verifyToken } from "./../middleware/verifyToken";
import { TodoModel } from "./../models/todo.model";

const router = Router();

router.post("/create", getUserFromToken, verifyTodoBody("create"), async (req, res) => {
	const user = req.user;
	const todo = new TodoModel({
		...req.body,
		id: shortid(),
		createdAt: new Date().toISOString(),
		userID: user.id,
	});

	user.todos = [...user.todos, todo.id];
	const saved = await todo.save();
	user.save();

	res.status(201).json({ todo: saved });
});

router.put("/update", getUserFromToken, verifyTodoBody("update"), async (req, res) => {
	const { id, name, content } = req.body;

	const todo = await TodoModel.findOne({ id });
	if (!todo) return res.status(404).json({ error: "Todo not found" });

	todo.name = name ?? todo.name;
	todo.content = content ?? todo.content;

	const savedTodo = await todo.save();
	res.status(200).json({ success: true, todo: savedTodo });
});

router.delete("/delete", getUserFromToken, verifyToken, async (req, res) => {
	const id = req.query.id as string;

	TodoModel.deleteOne({ id }, (err) => {
		if (err) return res.status(500).json({ error: err });
		const user = req.user;

		user.todos = user.todos.filter((todoID) => id !== todoID);
		user.save();

		res.json({ success: true });
	});
});

router.get("/all", getUserFromToken, verifyToken, async (req, res) => {
	TodoModel.find()
		.where("id")
		.in(req.user.todos)
		.exec((err, docs) => {
			if (err) return res.status(500).json({ error: err });
			res.json({ todos: docs });
		});
});

router.get("/", getUserFromToken, verifyToken, async (req, res) => {
	const id: string = req.query.id as string;
	const todo = await TodoModel.findOne({ id });

	if (!todo) return res.json({ error: "Todo not found" });
	res.json({ todo });
});

export { router as todoRoute };
