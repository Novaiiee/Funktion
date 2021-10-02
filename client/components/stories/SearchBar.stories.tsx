import { Meta, Story } from "@storybook/react";
import { useInput } from "../../hooks/useInput";
import { SearchBar, SearchBarProps } from "../SearchBar";

export const Default: Story = (props) => {
	const input = useInput("");

	return (
		<div className="p-20">
			<SearchBar value={input.value} onChange={input.onChange} {...props} />
		</div>
	);
};

export const Dark: Story = (props) => {
	const input = useInput("");

	return (
		<div className="dark p-20">
			<SearchBar value={input.value} onChange={input.onChange} {...props} />
		</div>
	);
};

const component = {
	title: "SearchBar",
	component: SearchBar,
	args: {
		placeholder: "Search for a Todo",
	},
} as Meta<SearchBarProps>;

export default component;
