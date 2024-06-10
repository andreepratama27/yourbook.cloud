import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { useStore } from "zustand";
import FavoriteCard from "../components/favorite-card";
import favoriteStore from "../store/favorite.store";
import bookStore from "../store/book.store";

export const Route = createLazyFileRoute("/favorite")({
	component: FavoritePage,
});

function FavoritePage() {
	const { favorite } = useStore(favoriteStore);
	const { book } = useStore(bookStore);

	return (
		<>
			<Navbar />
			<div className="py-10" />

			<div className="max-w-xl mx-auto">
				<div className="title-wrapper mb-4">
					<p className="text-lg font-semibold">
						Favorite Collections ({favorite.length})
					</p>
				</div>

				<div className="favorite space-y-4">
					{favorite.map((favItem) => (
						<FavoriteCard key={favItem.id} type="favorite" {...favItem} />
					))}
				</div>

				<div className="our-collections mt-8">
					<div className="title-wrapper mb-4">
						<p className="text-lg font-semibold">
							Your Collections ({book.length})
						</p>
					</div>
				</div>
				<div className="favorite space-y-4">
					{book.map((bookItem) => (
						<FavoriteCard key={bookItem.id} type="book" {...bookItem} />
					))}
				</div>
			</div>
		</>
	);
}
