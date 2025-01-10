import { pool } from "../db/index.js";

export async function fetchAllLoans() {
    const allLoans = await pool.query(
        'SELECT * FROM loans'
    );
    return allLoans.rows;
}

export async function fetchLoanById(id) {
    const allLoans = await pool.query(
        'SELECT * FROM loans WHERE id = $1', [id]
    );

    return allLoans.rows
}

export async function insertLoan(loan_id, book_id, member_id, loan_date, return_date) {
    const newLoan = await pool.query('INSERT INTO loan(loan_id, book_id, member_id, loan_date, return_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',[loan_id, book_id, member_id, loan_date, return_date]);
    return newLoan.rows
}

export async function modifyLoanById(id, loan_id, book_id, member_id, loan_date, return_date) {}

export async function removeLoanById(id) {}