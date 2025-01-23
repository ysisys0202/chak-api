import express from "express";
import * as reviewsController from "../controller/reviews.js";

const router = express.Router();

router.get("/", reviewsController.getReviews);

router.get("/public", reviewsController.getPublicReviews);

router.get("/:id", reviewsController.getReview);

router.post("/", reviewsController.createReview);

router.put("/", reviewsController.updateReview);

router.delete("/", reviewsController.removeReview);

export default router;
