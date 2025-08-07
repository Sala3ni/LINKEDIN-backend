import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getSuggestedConnections,
  getPublicProfile,
  updateProfile,
  getCurrentUser, // ✅ import controller
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", protectRoute, getCurrentUser); // ✅ Add this first
router.get("/suggestions", protectRoute, getSuggestedConnections);
router.put("/profile", protectRoute, updateProfile);
router.get("/:username", protectRoute, getPublicProfile); // 👈 Keep this last

export default router;
