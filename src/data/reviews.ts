import { User } from "./users.js";

import { sequelize } from "../db/database.js";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

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

export const getAll = async () => {
  return await Review.findAll();
};

export const getAllByUserId = async (userId: string) => {
  return await Review.findAll({ where: { userId } });
};

export const getById = async (id: string) => {
  return await Review.findOne({ where: { id } });
};

export const getAllPublic = async () => {
  return await Review.findAll({ where: { isPublic: true } });
};

export const getAllPrivate = async () => {
  return await Review.findAll({ where: { isPublic: false } });
};

export const create = async (data: Omit<InferAttributes<Review>, "id">) => {
  return Review.create(data).then((data) => data.dataValues);
};

export const update = async (
  id: string,
  data: Omit<InferAttributes<Review>, "id">
) => {
  const review = await getById(id);
  await review?.update({ ...review, ...data });

  return review;
};

export const remove = async (id: string) => {
  const review = await getById(id);
  await review?.destroy();
};
