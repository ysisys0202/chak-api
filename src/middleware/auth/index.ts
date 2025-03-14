import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { env } from "../../utils/envConfig.js";
import * as UserRepository from "../../data/users.js";

const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  let token;
  if (authHeader && authHeader?.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    token = req.cookies["token"];
  }

  if (!token) {
    res.status(401).json(AUTH_ERROR);
    return;
  }

  jwt.verify(
    token,
    env.jwt.secretKey,
    async (
      error: VerifyErrors | null,
      decoded: JwtPayload | string | undefined
    ) => {
      if (error) {
        res.status(401).json(AUTH_ERROR);
        return;
      }
      if (!decoded || typeof decoded === "string") {
        res.status(401).json(AUTH_ERROR);
        return;
      }
      const user = await UserRepository.findUser("id", decoded.id);
      if (!user) {
        res.status(401).json(AUTH_ERROR);
        return;
      }
      req.userId = user.id;
      req.token = token;

      next();
    }
  );
};
