import { Switch } from "@headlessui/react";
import { Dispatch, FC, SetStateAction } from "react";

export interface ToggleProps {
	enabled: boolean;
	setEnabled: (e: boolean) => void | Dispatch<SetStateAction<boolean>>;
}

export const Toggle: FC<ToggleProps> = ({ enabled, setEnabled }) => {
	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className={`${
				enabled ? "bg-blue-700" : "bg-gray-400"
			} relative inline-flex items-center h-6 rounded-full w-11`}
		>
			<span
				className={`${
					enabled ? "translate-x-6" : "translate-x-1"
				} inline-block w-4 h-4 transform bg-white rounded-full`}
			/>
		</Switch>
	);
};
