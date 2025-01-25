import express from "express";
import * as booksController from "../controller/books.js";

const router = express.Router();

router.get("/", booksController.getBooks);

router.get("/:isbn", booksController.getBook);

router.post("/", booksController.createBook);

export default router;
