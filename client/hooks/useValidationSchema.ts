import * as yup from "yup";

const LoginSchema = yup.object();
const RegisterSchema = yup.object();

export function useValidationSchema(type: FormType) {
  const schema = type === "login" ? LoginSchema : RegisterSchema;
  return schema
}
