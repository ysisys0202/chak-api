import express from "express";
import * as authController from "../controller/auth.js";
import { validate } from "../middleware/validators/index.js";
import { SignupSchema, LoginSchema } from "../middleware/validators/auth.js";
import { isAuth } from "../middleware/auth/index.js";

const router = express.Router();

router.post("/signup", validate(SignupSchema), authController.signup);
router.post("/login", validate(LoginSchema), authController.login);
router.get("/me", isAuth, authController.me);

export default router;
