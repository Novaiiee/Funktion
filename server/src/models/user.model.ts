import { Document, model, Schema } from "mongoose";

export interface UserDocument extends Document {
	id: string;
	name: string;
	email: string;
	password: string;
	todos: string[];
}

export const UserSchema = new Schema<UserDocument>({
	id: String,
	name: String,
	email: String,
	password: String,
	todos: [String],
});
export const UserModel = model<UserDocument>("funktion-user", UserSchema);
