import { NextFunction, Request, Response } from "express";
import joi from "joi";

const CreateTodoSchema = joi.object({
	name: joi.string().required(),
	content: joi.string(),
});

const UpdateTodoSchema = joi.object({
	name: joi.string(),
	content: joi.string(),
	id: joi.string().required(),
});

export function verifyTodoBody(type: "create" | "update") {
	return (req: Request, res: Response, next: NextFunction) => {
		const schema = type === "create" ? CreateTodoSchema : UpdateTodoSchema;
		const isValid = schema.validate(req.body);

		if (isValid.error) return res.status(404).json({ error: "Invalid Todo Data" });
		next();
	};
}
