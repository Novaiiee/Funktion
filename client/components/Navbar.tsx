import Link from "next/link";
import { FC } from "react";
import {CheckSquare, Menu} from "react-feather"
export interface NavbarProps {
	transparent?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ transparent }) => {
	return (
		<div
			className={`w-full flex items-center justify-between ${
				transparent ? "bg-transparent" : "bg-black"
			} px-5 md:px-28 text-white py-8`}
		>
      <div className="flex items-center space-x-2 ">
				<h1 className="font-medium hidden md:block">Funktion</h1>
        <CheckSquare />
			</div>
			<div className="space-x-6 hidden md:flex font-light">
				<Link href="/login">Login</Link>
				<Link href="/login">Register</Link>
      </div>
      <Menu className="md:hidden" onClick={() => {}}/>
		</div>
	);
};
