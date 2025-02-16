import { Request, Response } from "express";
import * as booksRepository from "../data/books.js";
import { generateNotFoundMessage } from "../utils/message.js";
import { env } from "../utils/envConfig.js";

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

export const searchBooks = async (req: Request, res: Response) => {
  const { query } = req.query;

  if (!query) {
    res.status(400).json({ message: "검색어를 입력해주세요." });
    return;
  }
  const encodedQuery = encodeURIComponent(query as string);

  try {
    const response = await fetch(
      `https://openapi.naver.com/v1/search/book.json?query=${encodedQuery}`,
      {
        method: "GET",
        headers: {
          "X-Naver-Client-Id": env.naver.clinetId,
          "X-Naver-Client-Secret": env.naver.clientSecret,
        },
      }
    );

    if (!response.ok) {
      res.status(500).json({ message: "API 요청에 실패했습니다." });
      return;
    }

    const data = await response.json();

    res.status(200).json({ data });
  } catch (error) {
    console.error("Error searching books:", error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
};
