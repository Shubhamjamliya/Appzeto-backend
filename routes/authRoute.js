import express from "express";
import { register, login, logout, me } from "../controllers/authController.js";
import auth from "../middlewares/authMiddleware.js";
import { registerValidation, loginValidation } from "../validators/authValidators.js";
import { refreshToken } from "../utils/refreshController.js";

const router = express.Router();

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);

router.post("/logout", auth, logout);
router.get("/me", auth, me);

router.get("/refresh", refreshToken);

export default router;
