import { Formik } from "formik";
import Link from "next/link";
import { FC } from "react";
import { useValidationSchema } from "../hooks/useValidationSchema";
import { Button } from "./Button";
import { InputField } from "./InputField";

export interface FormProps {
	type: FormType;
}

const initialValues: FormValues = {
	email: "",
	username: "",
	password: "",
};

export const Form: FC<FormProps> = ({ type }) => {
	const schema = useValidationSchema(type);

	const onSubmit = (values: FormValues) => {
		console.log(values);
	};

	return (
		<Formik validateSchema={schema} onSubmit={onSubmit} initialValues={initialValues}>
			<div className="flex w-full justify-center p-28">
				<div className="flex flex-col space-y-5 items-center">
					<h1 className="font-bold text-5xl mb-10">{type === "login" ? "Login" : "Register"}</h1>
					{type === "register" && <InputField name="username" placeholder="Username" />}
					<InputField name="email" placeholder="Email" />
					<InputField name="password" placeholder="Password" />
					<Button color="blue" className="w-full" type="submit">
						Submit
					</Button>
					<Link href={type === "login" ? "/register" : "/login"}>
						<a className="">
							{type === "login" ? "Don't have an Account? Register" : "Already have an Account? Login"}
						</a>
					</Link>
				</div>
			</div>
		</Formik>
	);
};
