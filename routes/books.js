import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.patch("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;
