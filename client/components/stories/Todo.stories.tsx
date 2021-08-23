import { Meta, Story } from "@storybook/react";
import { Todo, TodoProps } from "../Todo";

const Template: Story<TodoProps> = (props) => (
	<div className="grid md:grid-cols-3 md:grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 gap-4 px-5 md:px-28 place-content-center">
		{[...Array(9)].map((_, i) => {
			return <Todo {...props} key={i} />;
		})}
	</div>
);

export const Default = Template.bind({});
Default.args = {
	name: "Work out on Monday",
	createdAt: new Date().toLocaleDateString(),
};

const component = {
	title: "Todo",
	component: Todo,
	argTypes: { onClick: { action: "clicked" } },
} as Meta;

export default component;
