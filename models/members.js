import { pool } from "../db/index.js";

export async function fetchAllAuthors() {
//query the database
//fetch all authors
//return the all authors
//store them in a variable

const allAuthors = await pool.query(
    'SELECT * FROM authors'
    );

return allAuthors.rows;
}

export async function fetchAuthorById(id) {
    //query the database using ID
    //fetch author by his unique id
    //return the author
    //store the author in variable

    const allAuthors = await pool.query(
        'SELECT * FROM authors WHERE id = $1', [id]
    );

    return allAuthors.rows
}

export async function insertAuthor(first_name, last_name) {
    //into the database
    //create a variable to store the new author with the 2 values (first_name, last_name)
    // return new author
    const newAuthor = await pool.query('INSERT INTO authors(first_name, last_name) VALUES ($1, $2)',[first_name, last_name]);
    return newAuthor.rows
}

export async function modifyAuthorById(id, first_name, last_name) {}

export async function removeAuthorById(id) {}
