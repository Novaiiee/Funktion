import { FC } from "react";
import { Form } from "../components/Form";
import { Navbar } from "../components/Navbar";

export default function Register() {
	return (
		<div>
			<Navbar />
			<Form type="register" />
		</div>
	);
}
