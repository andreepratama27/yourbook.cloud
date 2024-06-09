import { createLazyFileRoute } from "@tanstack/react-router";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import BookCard from "../components/book-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getBook } from "../services/book.service";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	const [page, setPage] = useState(0);
	const { inView, ref } = useInView({
		threshold: 0,
	});

	const { data, fetchNextPage } = useInfiniteQuery({
		queryKey: ["get-books"],
		queryFn: () => getBook({ pageParam: page }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			return lastPage.nextPage;
		},
	});

	useEffect(() => {
		if (inView) {
			setPage((prevState) => prevState + 4);
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

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
						{data?.pages?.map((page) => {
							return page.data.map((book) => (
								<BookCard key={book.id} {...book} />
							));
						})}
					</div>

					<div ref={ref} />
				</div>
			</main>
		</>
	);
}
