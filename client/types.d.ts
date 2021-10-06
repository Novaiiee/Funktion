interface FormValues {
	email: string;
	password: string;
	name?: string;
}

interface Todo {
	name: string;
	content: string;
	id: string;
	createdAt: string;
	userID: string;
	completed: boolean;
}
interface User {
	id: string;
	email: string;
	name: string;
	todos: Todo[];
}

type FormType = "login" | "register";
