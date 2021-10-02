import { Story, Meta } from "@storybook/react";
import { Navbar, NavbarProps } from "../Navbar";

const Template: Story<NavbarProps> = (props) => <Navbar {...props} />;

export const Black = Template.bind({});
export const Transparent = Template.bind({});
Transparent.args = {
	transparent: true,
}

const component = {
	title: "Navbar",
	component: Navbar,
	args: {
		initToggle: true
	}
} as Meta<NavbarProps>;

export default component;
