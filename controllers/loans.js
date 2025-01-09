import {
    fetchAllLoans,
    fetchLoanById,
    insertLoan,
    modifyLoanById,
    removeLoanById,
  } from "../models/loans.js";
  
  export async function getLoans(req, res) {
    try {
      const loans = await fetchAllLoans();
      res.status(200).json({ status: "success", data: loans });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function getLoanById(req, res) {
    try {
      const id = req.params.id;
      const loan = await fetchLoanById(id);
      if (!loan) {
        return res
          .status(404)
          .json({ status: "fail", message: "Loan not found" });
      }
      res.status(200).json({ status: "success", data: loan });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function createLoan(req, res) {
    try {
      const { loan_id, book_id, member_id, loan_date, return_date } = req.body;
      if (!loan_id || !book_id || !member_id || !loan_date || !return_date) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const loan = await insertLoan(loan_id, book_id, member_id, loan_date, return_date);
      res.status(201).json({ status: "success", data: loan });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function updateLoanById(req, res) {
    try {
      const id = req.params.id;
      const { loan_id, book_id, member_id, loan_date, return_date } = req.body;
      if (!loan_id || !book_id || !member_id || !loan_date || !return_date) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const loan = await modifyLoanById(id, loan_id, book_id, member_id, loan_date, return_date);
      if (!loan) {
        return res
          .status(404)
          .json({ status: "fail", message: "Loan not found" });
      }
      res.status(200).json({ status: "success", data: loan });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function deleteLoanById(req, res) {
    try {
      const id = req.params.id;
      const loan = await removeLoanById(id);
      if (!loan) {
        return res
          .status(404)
          .json({ status: "fail", message: "Loan not found" });
      }
      res.status(204).send(); // 204 No Content
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }