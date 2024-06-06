import { useQuery } from "@tanstack/react-query";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { ArrowLeft, HeartIcon } from "lucide-react";
import { getBook } from "../services/book.service";
import { useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import BookCard from "../components/book-card";

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
		queryFn: getBook,
		staleTime: 10000,
	});

	return (
		<>
			<Navbar />
			<main className="max-w-xl mx-auto">
				<div className="py-10" />

				<div className="wrapper">
					<Jumbotron />

					<div className="title-wrapper my-4">
						<p className="text-lg font-semibold">Book Collections</p>
					</div>

					<div className="book-wrapper space-y-4 grid grid-cols-2 gap-4">
						{data?.map((book) => (
							<BookCard key={book.id} {...book} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
