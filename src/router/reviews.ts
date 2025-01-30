import express from "express";
import * as reviewsController from "../controller/reviews.js";
import { validate } from "../middleware/validators/index.js";
import { ReviewSchema } from "../middleware/validators/reviews.js";
import * as reviewDocs from "../middleware/docs/reviews.js";

const router = express.Router();

router.get("/", reviewDocs.getReviews, reviewsController.getReviews);

router.get(
  "/public",
  reviewsController.getPublicReviews,
  reviewDocs.getPublicReviews
);

router.get("/:id", reviewDocs.getReview, reviewsController.getReview);

router.post(
  "/",
  validate(ReviewSchema),
  reviewDocs.createReview,
  reviewsController.createReview
);

router.put(
  "/:id",
  validate(ReviewSchema),
  reviewDocs.updateReview,
  reviewsController.updateReview
);

router.delete("/:id", reviewDocs.removeReview, reviewsController.removeReview);

export default router;
