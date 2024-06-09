import { HeartIcon } from "lucide-react";
import type { Book } from "../../services/book.service";
import { Link } from "@tanstack/react-router";
import { useStore } from "zustand";
import favoriteStore from "../../store/favorite.store";

export default function BookCard(book: Book) {
	const { setFavorite, isFavorite } = useStore(favoriteStore);

	return (
		<div className="book-card w-full shadow rounded p-4" key={book.id}>
			<div className="img-wrapper w-full h-[350px]">
				<img src={book.cover} alt={book.title} className="w-full h-full" />
			</div>

			<div className="title-wrapper w-full py-2">
				<div className="title-wrapper--box flex items-center justify-between w-full">
					<p className="font-semibold">{book.title}</p>
					<HeartIcon
						role="button"
						fill={isFavorite(book.id) ? "red" : "white"}
						onClick={() => setFavorite(book)}
					/>
				</div>
				<p className="text-gray-500">{book.author}</p>
			</div>

			<div className="description-wrapper my-2">
				<p className="text-sm">{book.description}</p>
			</div>

			<div>
				<Link className="text-blue-500 italic text-sm" to={`/book/${book.id}`}>
					...more detail
				</Link>
			</div>
		</div>
	);
}
