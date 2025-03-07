import express from "express";
import * as booksController from "../controller/books.js";
import * as bookDoc from "../middleware/docs/books.js";
const router = express.Router();

router.get("/search", booksController.searchBooks);

router.get("/:isbn", bookDoc.getBook, booksController.getBook);

router.post("/", bookDoc.createBook, booksController.createBook);

export default router;
