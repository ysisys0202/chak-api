import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

import { SignupSchema } from "src/middleware/validators/auth.js";

export type User = {
  id: string;
  nickname: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  profileImage?: string;
};

const users: User[] = [
  {
    id: "60917b0b-0737-4277-8a6f-b005d5f6ecab",
    nickname: "BookLover123",
    name: "alicejohnson01",
    email: "alice.johnson@example.com",
    password: "$2b$10$OK9zFJS0dubU849XqQIZKe1PpJtgV3rJwjqoJWsmaU0EyszAl4diS",
    createdAt: new Date("2023-01-15T10:30:00Z"),
    updatedAt: new Date("2023-01-15T10:30:00Z"),
    profileImage: "https://example.com/profiles/alice.jpg",
  },
  {
    id: "650e6917-7863-4d9f-ad54-2b33fec88a98",
    nickname: "CodeMaster",
    name: "bobsmith02",
    email: "bob.smith@example.com",
    password: "$2b$10$OK9zFJS0dubU849XqQIZKe1PpJtgV3rJwjqoJWsmaU0EyszAl4diS",
    createdAt: new Date("2023-02-20T08:15:00Z"),
    updatedAt: new Date("2023-02-20T08:15:00Z"),
  },
];

type Credential = z.infer<typeof SignupSchema>;

export const createUser = (user: Credential) => {
  const id = uuidv4();
  const newUser = { ...user, createdAt: new Date(), id };
  users.push(newUser);

  return id;
};

export const findUser = (key: keyof User, value: string) => {
  return users.find((user) => user[key] === value);
};
