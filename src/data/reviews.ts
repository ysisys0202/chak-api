type ReadingStatus = "reading" | "paused" | "done";

type Review = {
  id: string;
  userId: string;
  bookId: string;
  readingStatus: ReadingStatus;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  rating: number;
  review_content: string;
  oneline_review?: string;
};

const reviews: Review[] = [
  {
    id: "1",
    userId: "user01",
    bookId: "book01",
    readingStatus: "reading",
    startDate: new Date("2025-01-01"),
    createdAt: new Date("2025-01-10"),
    rating: 4,
    review_content: "흥미로운 시작! 앞으로의 전개가 기대돼요.",
    oneline_review: "서두가 인상적인 책이에요.",
  },
  {
    id: "2",
    userId: "user02",
    bookId: "book02",
    readingStatus: "paused",
    startDate: new Date("2024-12-15"),
    endDate: undefined,
    createdAt: new Date("2025-01-05"),
    updatedAt: new Date("2025-01-15"),
    rating: 3,
    review_content: "읽다가 잠시 멈췄지만 다시 도전하고 싶어요.",
    oneline_review: "지금은 소화하기 어려운 책.",
  },
  {
    id: "3",
    userId: "user03",
    bookId: "book03",
    readingStatus: "done",
    startDate: new Date("2024-11-20"),
    endDate: new Date("2024-12-01"),
    createdAt: new Date("2024-12-02"),
    rating: 5,
    review_content: "마지막까지 손에서 놓을 수 없었던 책!",
    oneline_review: "완벽한 작품.",
  },
  {
    id: "4",
    userId: "user04",
    bookId: "book04",
    readingStatus: "reading",
    startDate: new Date("2025-01-10"),
    createdAt: new Date("2025-01-15"),
    rating: 4,
    review_content: "중반부가 흥미진진합니다.",
    oneline_review: "다음 챕터가 궁금해요.",
  },
  {
    id: "5",
    userId: "user05",
    bookId: "book05",
    readingStatus: "paused",
    startDate: new Date("2024-10-01"),
    createdAt: new Date("2024-10-10"),
    updatedAt: new Date("2024-10-20"),
    rating: 2,
    review_content: "아직은 잘 모르겠어요. 다시 읽어볼 예정입니다.",
    oneline_review: "취향에 안 맞을 수도?",
  },
  {
    id: "6",
    userId: "user06",
    bookId: "book06",
    readingStatus: "done",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-15"),
    createdAt: new Date("2024-09-16"),
    rating: 5,
    review_content: "완벽한 캐릭터와 스토리 전개!",
    oneline_review: "강력 추천!",
  },
  {
    id: "7",
    userId: "user07",
    bookId: "book07",
    readingStatus: "done",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-20"),
    createdAt: new Date("2025-01-21"),
    rating: 3,
    review_content: "초반은 좋았지만 후반부가 아쉬워요.",
    oneline_review: "평범한 마무리.",
  },
  {
    id: "8",
    userId: "user08",
    bookId: "book08",
    readingStatus: "reading",
    startDate: new Date("2025-01-12"),
    createdAt: new Date("2025-01-15"),
    rating: 4,
    review_content: "천천히 음미하면서 읽고 있는 중입니다.",
    oneline_review: "깊이 있는 책.",
  },
  {
    id: "9",
    userId: "user09",
    bookId: "book09",
    readingStatus: "paused",
    startDate: new Date("2024-11-01"),
    createdAt: new Date("2024-11-05"),
    updatedAt: new Date("2024-11-15"),
    rating: 3,
    review_content: "잠시 멈췄지만, 다시 돌아올 거예요.",
    oneline_review: "중간 부분이 어렵습니다.",
  },
  {
    id: "10",
    userId: "user10",
    bookId: "book10",
    readingStatus: "done",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2024-12-25"),
    createdAt: new Date("2024-12-26"),
    rating: 4,
    review_content: "느리지만 여운이 남는 책이었어요.",
    oneline_review: "생각하게 만드는 책.",
  },
];

export const getAll = async (): Promise<Review[]> => {
  return reviews;
};
