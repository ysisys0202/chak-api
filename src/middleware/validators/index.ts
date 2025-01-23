import { ZodSchema, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (validationSchema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationSchema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors = error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));
        res.status(400).json({
          success: false,
          message: "유효하지 않은 요청 데이터입니다.",
          errors: validationErrors,
        });
        return;
      }

      console.error("예상하지 못한 오류 발생:", error);
      res.status(500).json({
        success: false,
        message: "서버에서 오류가 발생했습니다.",
      });
    }
  };
