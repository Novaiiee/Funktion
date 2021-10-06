import { Form as FormikForm, Formik } from "formik";
import Link from "next/link";
import { FC, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { LoginSchema, RegisterSchema } from "../hooks/useValidationSchema";
import { Button } from "./Button";
import { InputField } from "./InputField";

export interface FormProps {
	type: FormType;
}

const initialValues: FormValues = {
	email: "",
	name: "",
	password: "",
};

export const Form: FC<FormProps> = ({ type }) => {
	const { register, login, authErrors } = useContext(UserContext);

	const onSubmit = (values: FormValues) => {
		switch (type) {
			case "login":
				login(values);
				break;
			case "register":
				register(values);
				break;
		}
	};

	return (
		<Formik
			validateSchema={type === "register" ? RegisterSchema : LoginSchema}
			onSubmit={onSubmit}
			initialValues={initialValues}
		>
			{({ handleSubmit }) => (
				<FormikForm className="flex w-full justify-center py-28 md:px-28">
					<div className="flex flex-col space-y-5 items-center">
						<h1 className="font-bold text-5xl mb-10">{type === "login" ? "Login" : "Register"}</h1>
						{type === "register" && <InputField name="name" placeholder="Username" />}
						<InputField name="email" placeholder="Email" />
						<InputField name="password" placeholder="Password" />
						<Button color="blue" className="w-full" type="submit">
							Submit
						</Button>
						{authErrors.map((e, i) => (
							<span className="text-red-500" key={i}>
								{e}
							</span>
						))}
						<Link href={type === "login" ? "/register" : "/login"}>
							<a className="">
								{type === "login" ? "Don't have an Account? Register" : "Already have an Account? Login"}
							</a>
						</Link>
					</div>
				</FormikForm>
			)}
		</Formik>
	);
};
