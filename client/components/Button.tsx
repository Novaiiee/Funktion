import classnames from "clsx";
import { FC, ReactNode } from "react";

export interface ButtonProps {
	color?: string;
	children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, color }) => {
	const normalColor = color === "black" || color == "white" ? color : `${color}-500`;

	const className = classnames(
		`ring-2 ring-${normalColor} rounded-md bg-${normalColor} text-white px-4 py-3 shadow-md font-medium`,
		`transition ease-in-out duration-125 hover:bg-transparent hover:text-${normalColor}`,
	);

	return <button className={className}>{children}</button>;
};
