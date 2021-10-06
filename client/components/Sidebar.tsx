import Link from "next/link";
import { FC } from "react";
import { Archive, Edit, LogOut, Settings } from "react-feather";

export const Sidebar: FC = () => {
	return (
		<div className="h-screen w-16 bg-black grid grid-rows-6 py-20">
			<div className="row-span-1 empty"></div>
			<div className="row-span-4 flex flex-col space-y-10 justify-center items-center">
				<Link href="/dashboard/settings">
					<a>
						<Settings color="white" />
					</a>
				</Link>
				<Link href="/dashboard/archive">
					<a>
						<Archive color="white" />
					</a>
				</Link>
				<Link href="/dashboard/todos">
					<a>
						<Edit color="white" />
					</a>
				</Link>
			</div>
			<div className="row-span-1 empty flex justify-center items-end">
				<LogOut color="white" onClick={() => console.log("Logout")} />
			</div>
		</div>
	);
};
