import { pool } from "../db/index.js";

export async function fetchAllBooks() {

    const allBooks = await pool.query(
        'SELECT * FROM books'
    );
    return allBooks.rows;
}

export async function fetchBookById(id) {
    const allBooks = await pool.query(
        'SELECT * FROM books WHERE id = $1', [id]
    );

    return allBooks.rows
}

export async function insertBook(book_id, title, author, genre, published_year) {
    const newBook = await pool.query('INSERT INTO books(book_id, title, author, genre, published_year) VALUES ($1, $2, $3, $4, $5) RETURNING *',[book_id, title, author, genre, published_year]);
    return newBook.rows
}

export async function modifyBookById(id, title, author_id, published_date) {}

export async function removeBookById(id) {}