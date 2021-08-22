import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { authRoute } from "./routes/auth.route";
import { todoRoute } from "./routes/todo.route";

mongoose
	.connect(process.env.DB ?? "", {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to DB"))
	.catch((e) => console.log(`ERROR ${e.message}`));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", authRoute);
app.use("/todos", todoRoute);
app.listen(process.env.PORT || 8000, () => console.log("Server Started"));
