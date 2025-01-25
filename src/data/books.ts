import { z } from "zod";

export type Book = {
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  thumbnailImage?: string;
  createdAt: Date;
  pubdate: Date;
};

export const books: Book[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    isbn: "978-0743273565",
    createdAt: new Date("2023-01-01"),
    pubdate: new Date("1925-04-10"),
  },
  {
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    isbn: "978-0451524935",
    createdAt: new Date("2023-02-05"),
    pubdate: new Date("1949-06-08"),
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    isbn: "978-0061120084",
    createdAt: new Date("2023-03-10"),
    pubdate: new Date("1960-07-11"),
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    isbn: "978-0316769488",
    createdAt: new Date("2023-04-20"),
    pubdate: new Date("1951-07-16"),
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publisher: "Chatto & Windus",
    isbn: "978-0060850524",
    createdAt: new Date("2023-05-25"),
    pubdate: new Date("1932-08-31"),
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publisher: "George Allen & Unwin",
    isbn: "978-0261102217",
    createdAt: new Date("2023-06-30"),
    pubdate: new Date("1937-09-21"),
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publisher: "Ballantine Books",
    isbn: "978-1451673319",
    createdAt: new Date("2023-07-10"),
    pubdate: new Date("1953-10-19"),
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publisher: "Harper & Brothers",
    isbn: "978-1503280786",
    createdAt: new Date("2023-08-15"),
    pubdate: new Date("1851-10-18"),
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "T. Egerton",
    isbn: "978-1503290563",
    createdAt: new Date("2023-09-05"),
    pubdate: new Date("1813-01-28"),
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    publisher: "George Allen & Unwin",
    isbn: "978-0618574940",
    createdAt: new Date("2023-10-02"),
    pubdate: new Date("1954-07-29"),
  },
];

export const getAll = () => {
  return books;
};

export const getAllByTitle = (title: string) => {
  return books.filter((book) => book.title === title);
};

export const getByIsbn = (isbn: string) => {
  return books.filter((book) => book.isbn === isbn);
};

export const createBook = (book: Book) => {
  const newBook = { ...book, createdAt: new Date() };
  books.push(newBook);

  return newBook;
};
