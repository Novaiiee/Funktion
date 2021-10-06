import * as yup from "yup";

export const LoginSchema = yup.object().shape({
	email: yup.string().email("Not an email").required("Required*"),
	password: yup.string().required("Required*"),
});

export const RegisterSchema = yup.object().shape({
	username: yup.string().min(3).required("Required*"),
	email: yup.string().email("Not an email").required("Required*"),
	password: yup.string().min(6).required("Required*"),
});

export function useValidationSchema(type: FormType) {
	const schema = type === "login" ? LoginSchema : RegisterSchema;
	return schema;
}
