import express from "express";
import * as booksController from "../controller/books.js";
import * as bookDoc from "../middleware/docs/books.js";
const router = express.Router();

router.get("/", bookDoc.getBooks, booksController.getBooks);

router.get("/:isbn", bookDoc.getBook, booksController.getBook);

router.post("/", bookDoc.createBook, booksController.createBook);

export default router;
