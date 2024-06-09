import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Book } from "../services/book.service";

interface State {
	favorite: Book[];
}

interface Action {
	setFavorite: (book: Book) => void;
	isFavorite: (id: number) => boolean;
}

const favoriteStore = create<State & Action>()(
	persist(
		(set, get) => {
			return {
				favorite: [],

				setFavorite(bookParams) {
					if (get().isFavorite(bookParams.id)) {
						const filteredState = get().favorite.filter(
							(item) => item.id !== bookParams.id,
						);
						set((state) => ({
							...state,
							favorite: filteredState,
						}));
					} else {
						set((state) => ({
							...state,
							favorite: [...state.favorite, bookParams],
						}));
					}
				},

				isFavorite(id): boolean {
					return !!get().favorite.find((bookItem) => bookItem.id === id);
				},
			};
		},
		{
			name: "favorite-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default favoriteStore;
