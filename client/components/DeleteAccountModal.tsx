import { FC } from 'react';
import { XCircle } from "react-feather";
import { useThemeContext } from "../hooks/useThemeContext";
import { Button } from "./Button";

export const DeleteAccountModal: FC = () => {
  const { dark } = useThemeContext();

  return (
		<div className={`${dark && "dark"}`}>
			<div className={`bg-white dark:bg-gray-900 w-96 h-60 p-10 rounded-md shadow-md`}>
				<div className="flex flex-col items-center space-y-5 dark:bg-gray-900">
					<XCircle color="red" size={50} />
					<div className="text-center">
						<h2 className="dark:text-white">You are about to delete your account</h2>
						<h1 className="font-semibold dark:text-white">Are you sure?</h1>
					</div>
					<div className="w-full flex justify-between">
						<button className="font-semibold hover:opacity-50 dark:text-white">No</button>
						<Button color="red" py={2}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}