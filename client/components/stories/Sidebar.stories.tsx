import { Meta, Story } from "@storybook/react";
import { Sidebar } from "../Sidebar";

const Template: Story = (props) => <Sidebar {...props} />;

export const Default = Template.bind({});

const component = {
	title: "Sidebar",
	component: Sidebar,
} as Meta;

export default component;
