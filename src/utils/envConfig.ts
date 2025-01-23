import dotenv from "dotenv";
dotenv.config();

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  console.log(value);
  if (!value) {
    throw new Error(`${key}는 정의되지 않은 환경변수입니다.`);
  }
  return value;
};

export const envConfig = {
  jwt: {
    secretKey: getEnv("JWT_SECRET_KEY"),
    expiredSec: getEnv("JWT_EXPIRED_SEC"),
    bcryptSaltRounds: getEnv("JWT_BCRYPT_SALT_ROUNDS"),
  },
};
