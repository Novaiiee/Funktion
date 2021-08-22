import { NextFunction, Request, Response } from "express";
import joi from "joi";

const LoginSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required()
})

const RegisterSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(6),
  name: joi.string().required().min(3)
})

export function verifyAuthBody(type: "login" | "register") {
  return (req: Request, res: Response, next: NextFunction) => {
    const schema = type === "login" ? LoginSchema : RegisterSchema;
    const isValid = schema.validate(req.body);

    if (isValid.error) return res.status(404).json({ error: "Invalid Credentials" });
    next()
  }
}