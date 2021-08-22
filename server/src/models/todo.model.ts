import { Document, model, Schema } from "mongoose";

interface TodoDocument extends Document {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  userID: string;
}

export const TodoSchema = new Schema<TodoDocument>({
	id: String,
	name: String,
	content: String,
  createdAt: String,
  userID: String
});

export const TodoModel = model<TodoDocument>("funktion-todo", TodoSchema);
