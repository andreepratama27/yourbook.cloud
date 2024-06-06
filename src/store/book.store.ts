import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Book } from "../services/book.service";

interface State {
	book: Book[];
	favorite: Book[];
}

interface Action {
	setBook: (book: Book) => void;
	setFavorite: (book: Book) => void;
	isFavorite: (id: number) => boolean;
}

const bookStore = create<State & Action>()(
	persist(
		(set, get) => {
			return {
				book: [],
				favorite: [],

				setBook(bookParams) {
					set((state) => ({
						...state,
						book: [...state.book, bookParams],
					}));
				},

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
			name: "book-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default bookStore;
