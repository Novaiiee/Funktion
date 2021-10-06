import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { PlusSquare } from "react-feather";
import { AccountDropdown } from "../../../components/AccountDropdown";
import { SearchBar } from "../../../components/SearchBar";
import { Sidebar } from "../../../components/Sidebar";
import { Todo } from "../../../components/Todo";
import { UserContext } from "../../../contexts/UserContext";

// export const getServerSideProps = async () => {
// 	const token = localStorage.getItem("FUNKTION_ACCESS_TOKEN");
// 	const res = await axios.get("http://localhost:8000/todos/all", {
// 		headers: { Authorization: `Bearer ${token}` },
// 	});

// 	const fetchedTodos = res.data;

// 	return { props: { fetchedTodos } };
// };

export default function Dashboard() {
	const router = useRouter();
	const { user } = useContext(UserContext);

	const [todoQuery, setTodoQuery] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		if (!user) router.push("/");
	});

	const getAllTodos = useCallback(async () => {
		const token = localStorage.getItem("FUNKTION_ACCESS_TOKEN");
		const res = await axios.get<{ todos: Todo[] }>("http://localhost:8000/todos/all", {
			headers: { Authorization: `Bearer ${token}` },
		});

		setTodos(res.data.todos);
	}, []);

	useEffect(() => {
		getAllTodos();
	}, [getAllTodos]);

	return (
		<div className="w-screen h-screen flex bg-lightModeBackground dark:bg-darkModeBackground">
			<Sidebar />
			<div className="p-28 dark:text-white flex-col w-full space-y-6">
				<div className="flex justify-between">
					<div className="flex space-x-10 items-center">
						<h1 className="font-semibold text-4xl">Todos</h1>
						<SearchBar value={todoQuery} onChange={(e) => setTodoQuery(e.target.value)} />
					</div>
					<AccountDropdown />
				</div>
				<div>
					<button className="flex space-x-3">
						<PlusSquare />
						<span className="font-medium">Create</span>
					</button>
				</div>
				<div>
					<ul className="grid gap-1 xl:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
						{todos.map((todo) => {
							return (
								<Todo
									completed={todo.completed}
									createdAt={todo.createdAt}
									id={todo.id}
									todoName={todo.name}
									key={todo.id}
									complete={() => {}}
									update={() => {}}
									deleteTodo={() => {}}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
