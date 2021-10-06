import { ChangeEvent, FC, FormEvent } from "react";
import { Search } from "react-feather";

type OnChange = (e: ChangeEvent<HTMLInputElement>) => void;

export interface SearchBarProps {
	value: string;
	onChange: OnChange;

	placeholder?: string;
	submit?: (e: FormEvent<HTMLFormElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, onChange, submit, placeholder }) => {
	return (
		<form
			onSubmit={submit}
			className="flex space-x-4 p-4 max-h-14 rounded-md shadow-md ring-2 ring-gray-200 bg-white dark:bg-black"
		>
			<Search color="#a1a1aa" />
			<input
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="outline-none w-full text-gray-400 dark:bg-black dark:text-white"
			/>
		</form>
	);
};
