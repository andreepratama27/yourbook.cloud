import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getBook } from "../services/book.service";
import { useStore } from "zustand";
import bookStore from "../store/book.store";

const useBook = () => {
	const { setBook, book } = useStore(bookStore);

	const queryClient = useQueryClient();
	const [params] = useState({
		offset: 0,
		limit: 5,
	});

	const fetchBooks = async () => {
		const { data } = await queryClient.fetchQuery({
			queryKey: ["get-books", params],
			queryFn: () => getBook(params),
			staleTime: 30000,
		});

		setBook(data);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchBooks();
	}, []);

	return {
		book,
	};
};

export default useBook;
