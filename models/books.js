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

export async function insertBook(title, author_id, published_date) {}

export async function modifyBookById(id, title, author_id, published_date) {}

export async function removeBookById(id) {}