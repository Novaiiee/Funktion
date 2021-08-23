import { Meta, Story } from "@storybook/react";
import { Navbar, NavbarProps } from "../Navbar";

const Template: Story<NavbarProps> = (props) => <Navbar {...props} />;

export const Default = Template.bind({});

const component = {
	title: "Navbar",
	component: Navbar,
} as Meta;

export default component;
