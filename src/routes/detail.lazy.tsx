import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/detail")({
	component: DetailPage,
});

function DetailPage() {
	return (
		<main>
			<p>Detail Page</p>
		</main>
	);
}
