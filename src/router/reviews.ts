import express from "express";
import * as reviewsController from "../controller/reviews.js";
import { validate } from "../middleware/validators/index.js";
import { ReviewSchema } from "../middleware/validators/reviews.js";

const router = express.Router();

router.get("/", reviewsController.getReviews);

router.get("/public", reviewsController.getPublicReviews);

router.get("/:id", reviewsController.getReview);

router.post("/", validate(ReviewSchema), reviewsController.createReview);

router.put("/:id", validate(ReviewSchema), reviewsController.updateReview);

router.delete("/:id", reviewsController.removeReview);

export default router;
