/* eslint-disable no-useless-catch */
import axios from "../libs/axios";

export interface Book {
	id: number;
	title: string;
	description: string;
	cover: string;
	publicationDate: string;
	author: string;
}

interface Params {
	offset: number;
	limit: number;
}

const getBook = async ({
	offset = 0,
	limit = 5,
}: Partial<Params>): Promise<Book[]> => {
	try {
		const response = await axios.get(`/books?_start=${offset}&_limit=${limit}`);
		return response.data;
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
