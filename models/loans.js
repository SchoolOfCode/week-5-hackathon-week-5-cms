import { pool } from "../db/index.js";

export async function fetchAllLoans() {}

export async function fetchLoanById(id) {}

export async function insertLoan(loan_id, book_id, member_id, loan_date, return_date) {}

export async function modifyLoanById(id, loan_id, book_id, member_id, loan_date, return_date) {}

export async function removeLoanById(id) {}