import { ReviewSchema } from "src/middleware/validators/reviews.js";
import { z } from "zod";

export type Review = z.infer<typeof ReviewSchema>;

let reviews: Review[] = [
  {
    id: "review1",
    userId: "user1",
    bookId: "book1",
    readingStatus: "reading",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-05"),
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-05"),
    rating: 8,
    title: "The Great Adventure",
    reviewDetail: "A thrilling journey through unexplored territories.",
    reviewOneline: "Exciting and unputdownable!",
    isPublic: true,
  },
  {
    id: "review2",
    userId: "user1",
    bookId: "book2",
    readingStatus: "paused",
    startDate: new Date("2025-01-10"),
    endDate: undefined,
    createdAt: new Date("2025-01-10"),
    updatedAt: undefined,
    rating: 6,
    title: "Science and You",
    reviewDetail:
      "The book has a lot of potential, but I couldn't get into it.",
    reviewOneline: "A slow start, but might pick up later.",
    isPublic: false,
  },
  {
    id: "review3",
    userId: "user1",
    bookId: "book3",
    readingStatus: "done",
    startDate: new Date("2025-01-15"),
    endDate: new Date("2025-01-20"),
    createdAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-01-20"),
    rating: 9,
    title: "Mystery at the Mansion",
    reviewDetail:
      "A fantastic mystery that kept me guessing until the very end!",
    reviewOneline: "Perfect for fans of classic whodunits.",
    isPublic: true,
  },
  {
    id: "review4",
    userId: "user1",
    bookId: "book4",
    readingStatus: "reading",
    startDate: new Date("2025-01-22"),
    endDate: undefined,
    createdAt: new Date("2025-01-22"),
    updatedAt: undefined,
    rating: 7,
    title: "Journey Through Time",
    reviewDetail:
      "An intriguing time-travel story, though a bit complex at times.",
    reviewOneline: "A good mix of history and fiction.",
    isPublic: true,
  },
  {
    id: "review5",
    userId: "user2",
    bookId: "book5",
    readingStatus: "done",
    startDate: new Date("2025-01-25"),
    endDate: new Date("2025-01-30"),
    createdAt: new Date("2025-01-25"),
    updatedAt: new Date("2025-01-30"),
    rating: 10,
    title: "Tech Revolution",
    reviewDetail: "Incredibly insightful! A must-read for tech enthusiasts.",
    reviewOneline: "A brilliant look into the future of technology.",
    isPublic: false,
  },
  {
    id: "review6",
    userId: "user2",
    bookId: "book6",
    readingStatus: "reading",
    startDate: new Date("2025-02-01"),
    endDate: undefined,
    createdAt: new Date("2025-02-01"),
    updatedAt: undefined,
    rating: 7,
    title: "The Art of Living",
    reviewDetail: "A reflective piece on living a fulfilling life.",
    reviewOneline: "Inspiring, but could be more engaging.",
    isPublic: true,
  },
  {
    id: "review7",
    userId: "user3",
    bookId: "book7",
    readingStatus: "done",
    startDate: new Date("2025-02-10"),
    endDate: new Date("2025-02-12"),
    createdAt: new Date("2025-02-10"),
    updatedAt: new Date("2025-02-12"),
    rating: 8,
    title: "Deep Dive into Psychology",
    reviewDetail: "An excellent overview of human behavior and cognition.",
    reviewOneline: "A must-read for psychology buffs.",
    isPublic: true,
  },
  {
    id: "review8",
    userId: "user3",
    bookId: "book8",
    readingStatus: "paused",
    startDate: new Date("2025-02-15"),
    endDate: undefined,
    createdAt: new Date("2025-02-15"),
    updatedAt: undefined,
    rating: 6,
    title: "History's Mysteries",
    reviewDetail: "Interesting, but the writing style was hard to follow.",
    reviewOneline: "Not for everyone, but could be educational.",
    isPublic: false,
  },
  {
    id: "review9",
    userId: "user3",
    bookId: "book9",
    readingStatus: "done",
    startDate: new Date("2025-02-20"),
    endDate: new Date("2025-02-22"),
    createdAt: new Date("2025-02-20"),
    updatedAt: new Date("2025-02-22"),
    rating: 9,
    title: "Unveiling the Stars",
    reviewDetail: "A beautiful narrative about the cosmos and its mysteries.",
    reviewOneline: "Stunning and poetic, highly recommend.",
    isPublic: true,
  },
  {
    id: "review10",
    userId: "user3",
    bookId: "book10",
    readingStatus: "reading",
    startDate: new Date("2025-02-25"),
    endDate: undefined,
    createdAt: new Date("2025-02-25"),
    updatedAt: undefined,
    rating: 8,
    title: "The Evolution of Ideas",
    reviewDetail: "Thought-provoking and filled with powerful insights.",
    reviewOneline: "A deep dive into human progress.",
    isPublic: false,
  },
];

export const getAll = (): Review[] => {
  return reviews;
};

export const getAllByUserId = (userId: string): Review[] => {
  return reviews.filter((review) => review.userId === userId);
};

export const getById = (id: string): Review | undefined => {
  return reviews.find((review) => review.id === id);
};

export const getAllPublic = (): Review[] => {
  return reviews.filter((review) => review.isPublic);
};

export const getAllPrivate = (): Review[] => {
  return reviews.filter((review) => !review.isPublic);
};

export const create = (data: Review): Review => {
  reviews = [data, ...reviews];
  return data;
};

export const update = (id: string, data: Review): Review | undefined => {
  const reviewIndex = reviews.findIndex((review) => review.id === id);

  if (reviewIndex === -1) {
    return undefined;
  }

  reviews[reviewIndex] = { ...reviews[reviewIndex], ...data };

  return reviews[reviewIndex];
};

export const remove = (id: string) => {
  reviews.filter((review) => review.id !== id);
};
