import express from "express";
import {
  getMembers,
  getMemberById,
  createMember,
  updateMemberById,
  deleteMemberById,
} from "../controllers/members.js";

const router = express.Router();

router.get("/", getMembers);
router.get("/:id", getMemberById);
router.post("/", createMember);
router.patch("/:id", updateMemberById);
router.delete("/:id", deleteMemberById);

export default router;
