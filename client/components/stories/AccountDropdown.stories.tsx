import { Meta, Story } from "@storybook/react";
import { useThemeContext } from "../../hooks/useThemeContext";
import { AccountDropdown, AccountDropdownProps } from "../AccountDropdown";

export const Dark: Story<AccountDropdownProps> = (props) => {
	const { setDark } = useThemeContext();

	setDark(true);
	return (
		<div className="bg-gray-900 w-full h-screen p-20">
			<AccountDropdown {...props} />
		</div>
	);
};

export const Default: Story<AccountDropdownProps> = (props) => {
	return (
		<div className="w-full h-screen p-20">
			<AccountDropdown {...props} />
		</div>
	);
};

const component = {
	title: "AccountDropdown",
	component: AccountDropdown,
	args: {
		username: "Twilight",
	},
} as Meta<AccountDropdownProps>;

export default component;
