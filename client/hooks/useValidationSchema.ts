import * as yup from "yup";

const LoginSchema = yup.object({
	email: yup.string().required("Required*").email("Not an email"),
	password: yup.string().required("Required*"),
});

const RegisterSchema = yup.object({
	username: yup.string().required("Required*").min(3),
	email: yup.string().required("Required*").email("Not an email"),
	password: yup.string().required("Required*").min(6),
});

export function useValidationSchema(type: FormType) {
	const schema = type === "login" ? LoginSchema : RegisterSchema;
	return schema;
}
