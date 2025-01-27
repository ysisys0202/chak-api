import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as UserRepository from "../data/users.js";
import { env } from "../utils/envConfig.js";

export const signup = async (req: Request, res: Response) => {
  const { nickname, loginId, email, password, profileImage } = req.body;
  const isNameDuplicate = await UserRepository.findUser("loginId", loginId);
  if (isNameDuplicate) {
    res
      .status(409)
      .json({ message: `${loginId}은 이미 존재하는 아이디입니다.` });
    return;
  }
  const isEmailDuplicate = await UserRepository.findUser("email", email);
  if (isEmailDuplicate) {
    res.status(409).json({ message: `${email}은 이미 존재하는 이메일입니다.` });
    return;
  }
  const isNickNameDuplicate = await UserRepository.findUser(
    "nickname",
    nickname
  );
  if (isNickNameDuplicate) {
    res
      .status(409)
      .json({ message: `${nickname}은 이미 존재하는 닉네임입니다.` });
    return;
  }
  const hashedPassword = await bcrypt.hash(
    password,
    Number(env.jwt.bcryptSaltRounds)
  );
  const userId = await UserRepository.createUser({
    loginId,
    password: hashedPassword,
    nickname,
    email,
    profileImage,
  });

  const token = createJwtToken(userId);
  setToken(res, token);
  res.status(201).json({ token, loginId });
};

export const login = async (req: Request, res: Response) => {
  const { loginId, password } = req.body;
  const user = await UserRepository.findUser("loginId", loginId);
  if (!user) {
    res.status(401).json({
      message:
        "로그인 정보가 유효하지 않습니다. 아이디와 비밀번호를 확인해주세요.",
    });
    return;
  }
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    res.status(401).json({
      message:
        "로그인 정보가 유효하지 않습니다. 아이디와 비밀번호를 확인해주세요.",
    });
    return;
  }
  const token = createJwtToken(user.id);
  setToken(res, token);
  res.status(200).json({ token, loginId });
};

const setToken = (res: Response, token: string) => {
  const options = {
    maxAge: Number(env.jwt.expiredSec) * 1000,
    httpOnly: true,
    samesSite: "none",
    secure: true,
  };
  res.cookie("token", token, options);
};

export const createJwtToken = (id: number) => {
  return jwt.sign({ id }, env.jwt.secretKey, {
    expiresIn: env.jwt.expiredSec,
  });
};

export const me = async (req: Request, res: Response) => {
  const user = await UserRepository.findUser("id", String(req.userId));
  if (!user) {
    res.status(404).json({ message: "존재하지 않는 사용자입니다." });
    return;
  }
  res.status(200).json({ token: req.token, username: user.loginId });
};
