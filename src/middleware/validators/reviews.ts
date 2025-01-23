import { z } from "zod";

const ReadingStateSchema = z.union(
  [z.literal("reading"), z.literal("paused"), z.literal("done")],
  {
    invalid_type_error:
      "독서 상태는 'reading', 'paused', 'done' 중 하나로 입력해주세요.",
  }
);

export const ReviewSchema = z.object({
  id: z.string(),
  userId: z.string(),
  bookId: z.string({
    required_error: "책 정보를 입력해주세요.",
  }),
  readingStatus: ReadingStateSchema,
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  rating: z
    .number({
      required_error: "별점을 입력해주세요.",
      invalid_type_error: "별점은 0점 이상, 10점 이하의 숫자로 입력해주세요.",
    })
    .min(0, { message: "별점은 최소 0점 이상이어야 해요." })
    .max(10, { message: "별점은 최대 10점까지만 입력할 수 있어요." }),
  title: z
    .string({
      required_error: "제목을 입력해주세요.",
      invalid_type_error: "제목은 1자 이상, 60자 이하로 입력해주세요.",
    })
    .trim()
    .min(1, { message: "제목은 최소 1자 이상이어야 해요." })
    .max(60, { message: "제목은 최대 60자까지만 입력할 수 있어요." }),
  reviewDetail: z.string().optional(),
  reviewOneline: z
    .string()
    .max(255, {
      message: "한줄평은 최대 255자까지만 입력할 수 있어요.",
    })
    .optional(),
  isPublic: z.boolean(),
});
