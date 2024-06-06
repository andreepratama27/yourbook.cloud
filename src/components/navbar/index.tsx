import { Link, useRouter } from "@tanstack/react-router";
import { HeartIcon } from "lucide-react";

export default function Navbar() {
	const router = useRouter();
	return (
		<nav className="bg-gray-100 w-full mx-auto h-14 place-content-center shadow fixed z-10">
			<div className="max-w-xl mx-auto flex items-center w-full justify-between">
				<div className="w-72">
					<Link to="/" className="font-semibold font-serif">
						YourBook.cloud
					</Link>
				</div>

				<div className="icon-wrapper">
					<Link
						to="/favorite"
						activeProps={{
							className: "text-red-500",
						}}
					>
						<HeartIcon
							color=""
							fill={
								router.state.location.pathname === "/favorite" ? "red" : "grey"
							}
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
}
