import { Request, Response } from "express";
import * as reviewsRepository from "../data/reviews.js";

export const getReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.query.userId as string;

  const reviews = userId
    ? reviewsRepository.getAllByUserId(userId)
    : reviewsRepository.getAll();

  res.status(200).json(reviews);
};

export const getPublicReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  const reviews = reviewsRepository.getAllPublic();

  res.status(200).json(reviews);
};

export const getReview = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const review = reviewsRepository.getById(id);
  if (!review) {
    res
      .status(404)
      .json({ message: `${id} id를 가진 review가 존재하지 않습니다.` });
  }

  res.status(200).json(review);
};

export const createReview = async (req: Request, res: Response) => {
  const data = req.body;
  const review = reviewsRepository.create({
    id: new Date().toString(),
    ...data,
  });
  res.status(201).json(review);
};

export const updateReview = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const review = reviewsRepository.update(id, data);
  if (!review) {
    res
      .status(404)
      .json({ message: `${id} id를 가진 리뷰가 존재하지 않습니다.` });
  }
  res.status(201).json(review);
};

export const removeReview = async (req: Request, res: Response) => {
  const id = req.params.id;
  reviewsRepository.remove(id);

  res
    .status(204)
    .json({ message: `${id} id 리뷰가 성공적으로 삭제되었습니다.` });
};
