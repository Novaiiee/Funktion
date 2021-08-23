import { FC } from "react";
import { CheckSquare, Edit, Trash } from "react-feather";
import { shortenString } from "../utils";

export interface TodoProps {
	id: string;
	name: string;
	createdAt: string;
	deleteTodo: (id: string) => void;
	update: (id: string, name: string) => void;
	complete: (id: string) => void;
}

export const Todo: FC<TodoProps> = ({ id, name, createdAt, deleteTodo, complete, update }) => {
	return (
		<div className="lg:w-72 lg:h-72 w-64 h-64 p-5 grid grid-rows-4 bg-black text-white rounded-lg space-y-5">
			<div className="row-span-2 flex items-start space-x-4 justify-end pt-4">
				<CheckSquare onClick={() => complete(id)} />
				<Trash onClick={() => deleteTodo(id)} />
				<Edit onClick={() => {}} />
			</div>
			<div className="row-span-2 flex justify-center items-between flex-col">
				<h2>Created on {createdAt}</h2>
				<h1 className="font-semibold text-2xl pr-8">{shortenString(name, 50)}</h1>
			</div>
		</div>
	);
};
