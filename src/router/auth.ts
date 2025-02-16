import express from "express";
import * as authController from "../controller/auth.js";
import { validate } from "../middleware/validators/index.js";
import { SignupSchema, LoginSchema } from "../middleware/validators/auth.js";
import { isAuth } from "../middleware/auth/index.js";
import * as authDoc from "../middleware/docs/auth.js";
const router = express.Router();

router.post(
  "/signup",
  validate(SignupSchema),
  authDoc.signup,
  authController.signup
);
router.post(
  "/login",
  validate(LoginSchema),
  authDoc.login,
  authController.login
);
router.post("/logout", isAuth, authController.logout);
router.get("/me", isAuth, authDoc.me, authController.me);

export default router;
