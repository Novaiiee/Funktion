import { sign } from "jsonwebtoken";
import { Token } from "../types";

export function generateToken(data: Token) {
	return sign(data, process.env.TOKEN_SECRET!, { expiresIn: "1d" });
}
