import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { dashboard, getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/dashboard", auth, dashboard);
router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);

export default router;
