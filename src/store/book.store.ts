import { create } from "zustand";
import type { Book } from "../services/book.service";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
	book: Book[];
}

interface Action {
	setBook: (book: Book[]) => void;
	addBook: (book: Book) => void;
}

const bookStore = create<State & Action>()(
	persist(
		(set) => {
			return {
				book: [],

				setBook(bookParams) {
					set(() => ({
						book: bookParams,
					}));
				},

				addBook(bookParams) {
					set((state) => ({
						book: [...state.book, bookParams],
					}));
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
