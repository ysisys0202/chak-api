import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sequelize } from "./db/database.js";
import ReviewsRouter from "./router/reviews.js";
import BooksRouter from "./router/books.js";
import AuthRouter from "./router/auth.js";
import { env } from "./utils/envConfig.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json" assert { type: "json" };

const app = express();

const corsOption = {
  origin: env.cors.allowedOrigin,
  optionSuccessStatus: 200,
  Credential: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan("tiny"));

app.use("/reviews", ReviewsRouter);
app.use("/books", BooksRouter);
app.use("/auth", AuthRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.send(500);
});

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("server started");
  });
});
