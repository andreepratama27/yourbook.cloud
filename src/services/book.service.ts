/* eslint-disable no-useless-catch */
import axios from "../libs/axios";

export interface Book {
	id?: number;
	title: string;
	description: string;
	cover: string;
	publicationDate: string;
	author: string;
}

interface ApiResponse<T> {
	data: T;
	total: number;
	nextPage: number | null;
}

const getBook = async ({
	pageParam = 0,
}: { pageParam: number }): Promise<ApiResponse<Book[]>> => {
	try {
		const response = await axios.get(`/books?_start=${pageParam}&_limit=4`);

		return {
			total: 16,
			data: response.data,
			nextPage: pageParam,
		};
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
};

const getBookDetail = async (id: string): Promise<Book> => {
	try {
		const response = await axios.get(`/books/${id}`);
		return response.data;
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
};

export { getBook, getBookDetail };
