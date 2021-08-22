import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Token } from "../types";
import { UserModel } from "./../models/user.model";

interface TokenResult {
	error: string | null;
	data: Token | null;
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
	const result = extractDataFromToken(req, res);

	if (result.error) {
		return res.status(404).json({ error: result.error });
	} else if (result.data) {
		req.token = result.data;
		next();
	}
}

export function extractDataFromToken(req: Request, res: Response): TokenResult {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return {
			error: "Token not Found",
			data: null,
		};
	}

	const data: Token = verify(token, process.env.TOKEN_SECRET!) as Token;

	if (!data) {
		return {
			error: "Invalid Token",
			data: null,
		};
	}

	return {
		data,
		error: null,
	};
}

export async function getUserFromToken(req: Request, res: Response, next: NextFunction) {
	const result = extractDataFromToken(req, res);

	if (result.error) {
		return res.status(404).json({ error: result.error });
	} else if (result.data) {
		const user = await UserModel.findOne({ id: result.data.id });
		
		req.user = user;
		next()
	}
}
