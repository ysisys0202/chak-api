import { Request, Response } from "express";
import * as booksRepository from "../data/books.js";
import { generateNotFoundMessage } from "../utils/message.js";

export const getBooks = async (req: Request, res: Response) => {
  const { title } = req.query;
  const books = await (title
    ? booksRepository.getAllByTitle(title as string)
    : booksRepository.getAll());
  res.status(200).json(books);
};

export const getBook = async (req: Request, res: Response) => {
  const { isbn } = req.params;
  const book = await booksRepository.getByIsbn(isbn);
  if (!book) {
    res
      .status(404)
      .json({ message: generateNotFoundMessage("책", "isbn", isbn) });
  }
  res.status(200).json(book);
};

export const createBook = async (req: Request, res: Response) => {
  const book = req.body;
  await booksRepository.createBook(book);
  res.status(201).json(book);
};
