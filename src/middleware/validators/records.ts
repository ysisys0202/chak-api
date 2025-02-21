import { z } from "zod";

const ReadingStateSchema = z.union(
  [
    z.literal("pre-reading"),
    z.literal("reading"),
    z.literal("stop"),
    z.literal("done"),
  ],
  {
    invalid_type_error:
      "독서 상태는 'pre-reading', 'reading', 'paused', 'done' 중 하나로 입력해주세요.",
  }
);

export const RecordSchema = z.object({
  userId: z.number(),
  bookId: z.number({
    required_error: "책 정보를 입력해주세요.",
  }),
  readingState: ReadingStateSchema,
  startDate: z.date().optional(),
  endDate: z.date().optional(),
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
  recordDetail: z.string().optional(),
  isPublic: z.boolean(),
});
