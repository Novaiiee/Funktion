import { Request } from "express";
import { UserDocument } from "./models/user.model";

declare global {
	namespace Express {
		interface Request {
			token: Token
			user: UserDocument;
		}
	}
}
export interface Token {
  id: string;
}