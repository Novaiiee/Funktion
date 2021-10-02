import { Menu } from "@headlessui/react";
import Link from "next/link";
import { FC } from "react";
import { LogOut, Settings, User } from "react-feather";
import { useThemeContext } from "../hooks/useThemeContext";

export interface AccountDropdownProps {
	username: string;
}

export const AccountDropdown: FC<AccountDropdownProps> = ({ username }) => {
	const { dark } = useThemeContext();

	return (
		<div className={`${dark && "dark"}`}>
			<Menu>
				<div className="flex flex-col items-end">
					<Menu.Button className="flex items-center space-x-4 mb-2">
						<h3 className="font-medium dark:text-white">{username}</h3>
						<User color={dark ? "white" : "black"} />
					</Menu.Button>
					<Menu.Items className="bg-gray-300 dark:bg-gray-700 w-40 rounded-lg p-5 flex space-x-4">
						<div className="grid grid-rows-2 space-y-3">
							<Settings color={dark ? "white" : "black"} />
							<LogOut color={dark ? "white" : "black"} />
						</div>
						<div className="grid grid-rows-2 space-y-3">
							<Menu.Item>
								<Link href="/settings">
									<a className="dark:text-white text-left">Settings</a>
								</Link>
							</Menu.Item>
							<Menu.Item>
								<button className="outline-none dark:text-white text-left">
									<span>Logout</span>
								</button>
							</Menu.Item>
						</div>
					</Menu.Items>
				</div>
			</Menu>
		</div>
	);
};
