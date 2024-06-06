import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { getBookDetail } from "../services/book.service";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/book/$id")({
	component: BookDetailPage,
	// loader: ({ params }) => getBookDetail(params.id),
});

function BookDetailPage() {
	const id = Route.useParams().id;
	const { data } = useQuery({
		queryKey: ["get-book-detail"],
		queryFn: () => getBookDetail(id),
	});

	return (
		<>
			<Navbar />
			<main className="max-w-xl mx-auto">
				<div className="py-8" />

				<Link
					to="/"
					className="title-wrapper py-4 flex items-center gap-4 text-black hover:text-black visited:text-black"
				>
					<ArrowLeft size={18} />
					<p className="font-semibold">Back to home</p>
				</Link>

				<div className="grid grid-cols-2 gap-4">
					<div className="image-wrapper">
						<img
							src={data?.cover}
							alt={data?.title}
							className="w-[235px] h-[350px]"
						/>
					</div>
					<div className="title-wrapper flex-2">
						<p className="text-lg font-semibold">{data?.title}</p>
						<p className="text-gray-500 pb-1">{data?.author}</p>
						<p className="text-xs text-gray-500 font-mono">
							Publication Date:{" "}
							{new Date(data?.publicationDate as string).toLocaleString()}
						</p>

						<div className="mt-4">
							<p>{data?.description}</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
