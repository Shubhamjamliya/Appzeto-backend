import express from "express";
import auth from "../middlewares/authMiddleware.js";
import admin from "../middlewares/adminMiddleware.js";
import { dashboard, getUsers, deleteUser } from "../controllers/adminController.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

router.get("/dashboard", auth, admin, dashboard);
router.get("/users", auth, admin, getUsers);
router.delete("/users/:id", auth, admin, deleteUser);

export default router;
