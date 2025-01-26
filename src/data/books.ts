import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../db/database.js";

export class Book extends Model<
  InferAttributes<Book>,
  InferCreationAttributes<Book>
> {
  declare id: number;
  declare title: string;
  declare author: string;
  declare publisher: string;
  declare isbn: string;
  declare pubdate: Date;
  declare thumbnailImage: CreationOptional<string>;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    pubdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    thumbnailImage: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "books",
    timestamps: true,
  }
);

export const getAll = async () => {
  return await Book.findAll();
};

export const getAllByTitle = async (title: string) => {
  return await Book.findAll({ where: { title } });
};

export const getByIsbn = async (isbn: string) => {
  return await Book.findOne({ where: { isbn } });
};

export const createBook = async (book: Book) => {
  const newBook = await Book.create(book);

  return newBook;
};
