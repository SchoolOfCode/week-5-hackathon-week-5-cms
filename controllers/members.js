import {
    fetchAllMembers,
    fetchMemberById,
    insertMember,
    modifyMemberById,
    removeMemberById,
  } from "../models/books.js";
  
  export async function getMembers(req, res) {
    try {
      const memberss = await fetchAllMembers();
      res.status(200).json({ status: "success", data: members });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function getMemberById(req, res) {
    try {
      const id = req.params.id;
      const member = await fetchMemberById(id);
      if (!member) {
        return res
          .status(404)
          .json({ status: "fail", message: "Member not found" });
      }
      res.status(200).json({ status: "success", data: member });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function createMember(req, res) {
    try {
      const { member_id, name, email, membership_date  } = req.body;
      if (!member_id || !name || !email || !membership_date) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const member = await insertMember(member_id, name, email, membership_date);
      res.status(201).json({ status: "success", data: member });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function updateMemberById(req, res) {
    try {
      const id = req.params.id;
      const { member_id, name, email, membership_date } = req.body;
      if (!member_id || !name || !email || !membership_date) {
        return res
          .status(400)
          .json({ status: "fail", message: "Missing required fields" });
      }
      const loan = await modifyMemberById(id, member_id, name, email, membership_date);
      if (!member) {
        return res
          .status(404)
          .json({ status: "fail", message: "Member not found" });
      }
      res.status(200).json({ status: "success", data: member });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }
  
  export async function deleteMemberById(req, res) {
    try {
      const id = req.params.id;
      const member = await removeMemberById(id);
      if (!member) {
        return res
          .status(404)
          .json({ status: "fail", message: "Member not found" });
      }
      res.status(204).send(); // 204 No Content
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }