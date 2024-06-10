import { useStore } from "zustand";
import type { Book } from "../../services/book.service";
import favoriteStore from "../../store/favorite.store";
import bookStore from "../../store/book.store";

export default function FavoriteCard(params: Book & { type: string }) {
	const { setFavorite } = useStore(favoriteStore);
	const { removeBook } = useStore(bookStore);

	const handleRemove = (params: Book) => {
		if (params.type === "book") {
			removeBook(params.id as number);
		} else {
			setFavorite(params);
		}
	};

	return (
		<div className="favorite-card flex items-center gap-4 shadow rounded p-2 relative">
			<div className="favorite-card--image bg-gray-100 w-[60px] h-[80px] rounded ">
				<img src={params.cover} alt={params.title} className="w-full h-full" />
			</div>
			<div className="favorite-card--information flex-1">
				<p>{params.title}</p>
				<p className="text-gray-500">{params.description}</p>

				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="absolute bottom-1 text-sm text-red-500 right-1"
					role="button"
					onClick={() => handleRemove(params)}
				>
					Remove
				</div>
			</div>
		</div>
	);
}
