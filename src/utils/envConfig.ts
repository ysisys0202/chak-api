import dotenv from "dotenv";
dotenv.config();

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`${key}는 정의되지 않은 환경변수입니다.`);
  }
  return value;
};

export const env = {
  jwt: {
    secretKey: getEnv("JWT_SECRET_KEY"),
    expiredSec: getEnv("JWT_EXPIRED_SEC"),
    bcryptSaltRounds: getEnv("JWT_BCRYPT_SALT_ROUNDS"),
  },
  db: {
    host: getEnv("DB_HOST"),
    user: getEnv("DB_USER"),
    database: getEnv("DB_DATABASE"),
    password: getEnv("DB_PASSWORD"),
    port: getEnv("DB_PORT"),
  },
  client: {
    host: getEnv("CLIENT_HOST"),
  },
  naver: {
    clinetId: getEnv("NAVER_CLIENT_ID"),
    clientSecret: getEnv("NAVER_CLIENT_SECRET"),
  },
};
