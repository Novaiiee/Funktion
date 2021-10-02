import { Meta, Story } from "@storybook/react";
import { Form, FormProps } from "../Form";

const Default: Story<FormProps> = (props) => (
	<div className="h-screen w-screen">
		<Form {...props} />
	</div>
);

export const Register = Default.bind({});
Register.args = {
	type: "register",
};

export const Login = Default.bind({});
Login.args = {
	type: "login",
};

const component = {
	title: "Form",
	component: Form,
} as Meta<FormProps>;

export default component;
