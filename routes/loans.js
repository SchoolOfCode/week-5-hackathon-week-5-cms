import express from "express";
import {
  getLoans,
  getLoanById,
  createLoan,
  updateLoanById,
  deleteLoanById,
} from "../controllers/loans.js";

const router = express.Router();

router.get("/", getLoans);
router.get("/:id", getLoanById);
router.post("/", createLoan);
router.patch("/:id", updateLoanById);
router.delete("/:id", deleteLoanById);

export default router;