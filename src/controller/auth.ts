import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as UserRepository from "../data/users.js";
import { envConfig } from "../utils/envConfig.js";

export const signup = async (req: Request, res: Response) => {
  const { nickname, name, email, password, profileImage } = req.body;
  const isNameDuplicate = UserRepository.findUser("name", name);
  if (isNameDuplicate) {
    res.status(409).json({ message: `${name}은 이미 존재하는 아이디입니다.` });
    return;
  }
  const isEmailDuplicate = UserRepository.findUser("email", email);
  if (isEmailDuplicate) {
    res.status(409).json({ message: `${email}은 이미 존재하는 이메일입니다.` });
    return;
  }
  const isNickNameDuplicate = UserRepository.findUser("nickname", nickname);
  if (isNickNameDuplicate) {
    res
      .status(409)
      .json({ message: `${nickname}은 이미 존재하는 닉네임입니다.` });
    return;
  }
  const hashedPassword = await bcrypt.hash(
    password,
    Number(envConfig.jwt.bcryptSaltRounds)
  );
  const userId = await UserRepository.createUser({
    name,
    password: hashedPassword,
    nickname,
    email,
    profileImage,
  });

  const token = createJwtToken(userId);

  res.status(201).json({ token, name });
};

export const login = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  const user = await UserRepository.findUser("name", name);
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
  res.status(200).json({ token, name });
};

export const createJwtToken = (id: string) => {
  return jwt.sign({ id }, envConfig.jwt.secretKey, {
    expiresIn: envConfig.jwt.expiredSec,
  });
};

export const me = async (req: Request, res: Response) => {
  const user = await UserRepository.findUser("id", req.userId as string);
  if (!user) {
    res.status(404).json({ message: "존재하지 않는 사용자입니다." });
    return;
  }
  res.status(200).json({ token: req.token, username: user.name });
};
