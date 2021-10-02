import { Document, model, Schema } from "mongoose";

interface TodoDocument extends Document {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  userID: string;
  completed: boolean;
}

export const TodoSchema = new Schema<TodoDocument>({
	id: String,
	name: String,
	content: String,
  createdAt: String,
  userID: String,
  completed: Boolean
});

export const TodoModel = model<TodoDocument>("funktion-todo", TodoSchema);
