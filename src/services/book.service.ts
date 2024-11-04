import { Book } from "../models/book.model";

interface CreateBookRequest {
  title: string;
  author: string;
  publishedDate: string;
  publisher: string;
  description: string;
  coverImage: string;
  rating: {
    average: number;
    count: number;
  };
  tags: string[];
  initialQty: number;
  qty: number;
}

export type { CreateBookRequest };

export const BookService = {
  async create(request: CreateBookRequest) {
    const newBook = new Book(request);

    try {
      const savedBook = await newBook.save();
      return { book: savedBook };
    } catch (err) {
      throw err;
    }
  },
};
