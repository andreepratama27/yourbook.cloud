import { createLazyFileRoute } from "@tanstack/react-router";
import { HeartIcon } from "lucide-react";

export const Route = createLazyFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	return (
		<>
			<main className="container">
				<nav className="bg-gray-100 w-full h-14 flex items-center px-4 shadow flex justify-between">
					<div className="w-72">
						<input
							type="text"
							placeholder="Search book by title"
							className="rounded-sm shadow"
						/>
					</div>

					<div className="icon-wrapper">
						<HeartIcon color="" fill="grey" />
					</div>
				</nav>

				<div className="wrapper">
					<p className="text-lg font-semibold">Book Collections</p>
				</div>
			</main>
		</>
	);
}
