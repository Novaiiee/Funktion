import { FC } from 'react';
import { Form } from "../components/Form";
import { Navbar } from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <Form type="login" />
    </div>
  )
}