import Link from "next/link";
import { FC, useState } from "react";
import { CheckSquare, Menu } from "react-feather";

export interface NavbarProps {
	transparent?: boolean;
	initToggle?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ transparent, initToggle }) => {
	const [toggle, setToggle] = useState(initToggle ?? false);

	return (
		<>
			<div
				className={`w-full flex items-center justify-between ${
					transparent ? "bg-transparent" : "bg-black"
				} px-5 md:px-28 text-white py-8`}
			>
				<div className={"flex items-center md:space-x-4"}>
					<h1 className={`font-medium hidden md:block ${transparent && "text-black"}`}>Funktion</h1>
					<CheckSquare color={transparent ? "black" : "white"} />
				</div>
				<div className={`space-x-6 hidden md:flex font-light ${transparent && "text-black"}`}>
					<Link href="/login">
						<a className="font-normal">Register</a>
					</Link>
					<Link href="/login">
						<a className="font-normal">Login</a>
					</Link>
				</div>
				<Menu
					className="md:hidden"
					onClick={() => setToggle(!toggle)}
					color={transparent ? "black" : "white"}
				/>
			</div>
			{toggle && <MobileNavbar />}
		</>
	);
};

const MobileNavbar: FC = () => {
	return (
		<div className="text-white font-light bg-black flex flex-col space-y-4 p-5 md:hidden">
			<Link href="/login">Login</Link>
			<Link href="/login">Register</Link>
		</div>
	);
};
