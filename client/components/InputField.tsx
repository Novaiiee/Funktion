import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputFieldProps {
	name: string;
	placeholder?: string;
}

export const InputField: FC<InputFieldProps> = ({ name, placeholder }) => {
	return (
		<>
			<Field
				className="border-1 border-gray-400 shadow-sm rounded-md px-4 py-2 font-medium w-full"
				name={name}
				type={name !== "username" ? name : "text"}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} className="text-red-500"/>
		</>
	);
};
