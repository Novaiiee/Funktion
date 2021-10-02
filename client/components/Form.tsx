import { Formik } from "formik";
import { FC } from "react";
import { useValidationSchema } from "../hooks/useValidationSchema";

interface FormProps {
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

	return <Formik validateSchema={schema} onSubmit={onSubmit} initialValues={initialValues}></Formik>;
};
