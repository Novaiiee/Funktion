import { Meta, Story } from "@storybook/react";
import { Todo, TodoProps } from "../Todo";

const Template: Story<TodoProps> = (props) => <Todo {...props} />;

export const Default = Template.bind({});
Default.args = {
	todoName: "Work out on Monday",
	createdAt: new Date().toLocaleDateString(),
};

const component = {
	title: "Todo",
	component: Todo,
	argTypes: { onClick: { action: "clicked" } },
} as Meta;

export default component;
