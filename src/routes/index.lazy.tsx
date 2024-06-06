import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { HeartIcon } from "lucide-react";
import { getBook } from "../services/book.service";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	const [params] = useState({
		offset: 0,
		limit: 5,
	});
	const { data } = useQuery({
		queryKey: ["get-books", params],
		queryFn: () => getBook(params),
		staleTime: 10000,
	});

	return (
		<>
			<nav className="bg-gray-100 w-full max-w-xl mx-auto h-14 items-center px-4 place-self-center place-items-center shadow flex justify-between fixed">
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

			<main className="max-w-xl mx-auto">
				<div className="py-8" />

				<div className="wrapper">
					<div className="title-wrapper mb-4">
						<p className="text-lg font-semibold">Book Collections</p>
					</div>

					<div className="book-wrapper space-y-4 grid grid-cols-2 gap-4">
						{data?.map((book) => (
							<div
								className="book-card w-full shadow rounded p-4"
								key={book.id}
							>
								<div className="img-wrapper w-[235px] h-[350px]">
									<img
										src={book.cover}
										alt={book.title}
										className="w-full h-full"
									/>
								</div>

								<div className="title-wrapper w-full py-2">
									<div className="title-wrapper--box flex items-center justify-between w-full">
										<p className="font-semibold">{book.title}</p>
										<HeartIcon role="button" />
									</div>
									<p className="text-gray-500">{book.author}</p>
								</div>

								<div className="description-wrapper my-2">
									<p className="text-sm">{book.description}</p>
								</div>

								<div>
									<a href={`/detail/${book.id}`}>..more detail</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
