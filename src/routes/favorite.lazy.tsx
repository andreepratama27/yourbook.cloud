import { createLazyFileRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { useStore } from "zustand";
import FavoriteCard from "../components/favorite-card";
import favoriteStore from "../store/favorite.store";

export const Route = createLazyFileRoute("/favorite")({
	component: FavoritePage,
});

function FavoritePage() {
	const { favorite } = useStore(favoriteStore);

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
						<FavoriteCard key={favItem.id} {...favItem} />
					))}
				</div>
			</div>
		</>
	);
}
