import { create } from "zustand";
import type { Book } from "../services/book.service";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
	book: Book[];
}

interface Action {
	setBook: (book: Book[]) => void;
	addBook: (book: Book) => void;
	removeBook: (bookId: number) => void;
}

const bookStore = create<State & Action>()(
	persist(
		(set, get) => {
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

				removeBook(bookId) {
					const filteredBook = get().book.filter(
						(bookItem) => bookItem.id !== bookId,
					);
					set((state) => ({
						...state,
						book: filteredBook,
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
