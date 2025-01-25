import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { sequelize } from "./db/database.js";
import ReviewsRouter from "./router/reviews.js";
import BooksRouter from "./router/books.js";
import AuthRouter from "./router/auth.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/reviews", ReviewsRouter);
app.use("/books", BooksRouter);
app.use("/auth", AuthRouter);

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
