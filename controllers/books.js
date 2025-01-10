import {
    fetchAllBooks,
    fetchBookById,
    insertBook,
    modifyBookById,
    removeBookById,
  } from "../models/books.js";
  
  export async function getBooks(req, res) {
    try {
      const books = await fetchAllBooks();
      res.status(200).json({ status: "success", data: books });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function getBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await fetchBookById(id);
      if (!book) {
        return res
          .status(404)
          .json({ status: "fail", message: "Book not found" });
      }
      res.status(200).json({ status: "success", data: book });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function createBook(req, res) {
    try {
      const { book_id, title, author, genre, published_year } = req.body;
      if (!book_id || !title || !author || !genre || !published_year) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const book = await insertBook(book_id, title, author, genre, published_year);
      res.status(201).json({ status: "success", data: book });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function updateBookById(req, res) {
    try {
      const id = req.params.id;
      const { title, author_id, published_date } = req.body;
      if (!title || !author_id || !published_date) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const book = await modifyBookById(id, title, author_id, published_date);
      if (!book) {
        return res
          .status(404)
          .json({ status: "fail", message: "Book not found" });
      }
      res.status(200).json({ status: "success", data: book });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function deleteBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await removeBookById(id);
      if (!book) {
        return res
          .status(404)
          .json({ status: "fail", message: "Book not found" });
      }
      res.status(204).send(); // 204 No Content
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  