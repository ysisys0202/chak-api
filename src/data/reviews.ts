import { User } from "./users.js";

import { sequelize } from "../db/database.js";
import SQ, {
  CreationOptional,
  DataTypes,
  FindOptions,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Book } from "./books.js";

const Sequelize = SQ.Sequelize;
class Review extends Model<
  InferAttributes<Review>,
  InferCreationAttributes<Review>
> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare bookId: number;
  declare readingStatus: string;
  declare startDate: Date;
  declare endDate: Date;
  declare rating: number;
  declare title: string;
  declare reviewDetail: string;
  declare reviewOneline: string;
  declare isPublic: boolean;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    readingStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewDetail: {
      type: DataTypes.STRING,
    },
    reviewOneline: {
      type: DataTypes.STRING,
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "reviews",
    timestamps: true,
  }
);

Review.belongsTo(User, { foreignKey: "userId" });
Review.belongsTo(Book, { foreignKey: "bookId" });

const includeAssociations: FindOptions<
  InferAttributes<Review, { omit: never }>
> = {
  attributes: [
    "id",
    "userId",
    "readingStatus",
    "startDate",
    "endDate",
    "rating",
    "title",
    "reviewDetail",
    "reviewOneline",
    "isPublic",
    "createdAt",
    "updatedAt",
    [Sequelize.col("User.id"), "userId"],
    [Sequelize.col("User.nickname"), "userNickname"],
    [Sequelize.col("User.profileImage"), "userProfileImage"],
    [Sequelize.col("Book.id"), "bookId"],
    [Sequelize.col("Book.title"), "bookTitle"],
    [Sequelize.col("Book.author"), "bookAuthor"],
    [Sequelize.col("Book.publisher"), "bookPublisher"],
    [Sequelize.col("Book.thumbnailImage"), "bookThumbnailImage"],
  ],
  include: [
    {
      model: Book,
      attributes: [],
    },
    {
      model: User,
      attributes: [],
    },
  ],
};

export const getAll = async () => {
  return await Review.findAll(includeAssociations);
};

export const getAllByUserId = async (userId: string) => {
  return await Review.findAll({
    where: { userId },
    ...includeAssociations,
  });
};

export const getById = async (id: string) => {
  return await Review.findOne({
    where: { id },
    ...includeAssociations,
  });
};

export const getAllPublic = async () => {
  return await Review.findAll({
    where: { isPublic: true },
    ...includeAssociations,
  });
};

export const getAllPrivate = async () => {
  return await Review.findAll({
    where: { isPublic: false },
    ...includeAssociations,
  });
};

export const create = async (data: Omit<InferAttributes<Review>, "id">) => {
  const newReview = await Review.create(data);
  const id = newReview.dataValues.id;
  return Review.findOne({ where: { id }, ...includeAssociations });
};

export const update = async (
  id: string,
  data: Omit<InferAttributes<Review>, "id">
) => {
  const review = await getById(id);
  await review?.update({ ...review, ...data });

  return Review.findOne({ where: { id }, ...includeAssociations });
};

export const remove = async (id: string) => {
  const review = await getById(id);
  await review?.destroy();
};
