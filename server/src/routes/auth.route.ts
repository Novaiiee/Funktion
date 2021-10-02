import { compare, hash } from "bcrypt";
import { Router } from "express";
import { v4 } from "uuid";
import { generateToken } from "../utils";
import { verifyAuthBody } from "./../middleware/verifyAuthBody";
import { verifyToken } from "./../middleware/verifyToken";
import { UserModel } from "./../models/user.model";

const router = Router();

router.post("/register", verifyAuthBody("register"), async (req, res) => {
	const id = v4();

	const doesUserExist = await UserModel.findOne({ email: req.body.email });
	if (doesUserExist) return res.status(400).json({ error: "User already Exists" });

	const user = await new UserModel({
		...req.body,
		id,
		todos: [],
		password: await hash(req.body.password, 12),
	});

	const token = generateToken({ id });

	res
		.status(201)
		.header("Authorization", token)
		.json({ token, user: await user.save() });
});

router.post("/login", verifyAuthBody("login"), async (req, res) => {
	const { email, password } = req.body;
	const user = await UserModel.findOne({ email });

	if (!user) return res.status(400).json({ error: "Invalid Credentials" });

	if (!(await compare(password, user.password))) {
		return res.status(400).json({ error: "Invalid Credentials" });
	}

	const token = generateToken({ id: user.id });
	res.status(200).json({ user, token });
});

router.get("/user", verifyToken, async (req, res) => {
	const user = await UserModel.findOne({ id: req.token.id });
	if (!user) res.status(404).json({ error: "User not found" });

	res.status(200).json({ user });
});

export { router as authRoute };

const name = "";
