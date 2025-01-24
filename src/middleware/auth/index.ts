import { NextFunction, Request, Response } from "express";
import jwt, { VerifyCallback, VerifyOptions } from "jsonwebtoken";
import { envConfig } from "../../utils/envConfig.js";
import * as UserRepository from "../../data/users.js";

const AUTH_ERROR = { message: "Authentication Error" };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader?.startsWith("Bearer"))) {
    res.status(401).json(AUTH_ERROR);
    return;
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, envConfig.jwt.secretKey, async (error, decoded) => {
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
  });
};
