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
class Record extends Model<
  InferAttributes<Record>,
  InferCreationAttributes<Record>
> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare bookId: number;
  declare readingState: string;
  declare startDate: Date;
  declare endDate: Date;
  declare rating: number;
  declare title: string;
  declare recordDetail: string;
  declare isPublic: boolean;
}

Record.init(
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
    readingState: {
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
    recordDetail: {
      type: DataTypes.STRING(1005),
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "records",
    timestamps: true,
  }
);

Record.belongsTo(User, { foreignKey: "userId" });
Record.belongsTo(Book, { foreignKey: "bookId" });

const includeAssociations: FindOptions<
  InferAttributes<Record, { omit: never }>
> = {
  attributes: [
    "id",
    "userId",
    "readingState",
    "startDate",
    "endDate",
    "rating",
    "title",
    "recordDetail",
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
    [Sequelize.col("Book.image"), "bookImage"],
    [Sequelize.col("Book.isbn"), "bookIsbn"],
    [Sequelize.col("Book.pubdate"), "bookPubdate"],
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

export type ReadingState = "pre-reading" | "reading" | "stop" | "done";
type GetAllOptions = {
  userId?: string;
  start?: number;
  display?: number;
  readingState?: ReadingState;
};

export const getAll = async (options?: GetAllOptions) => {
  const where: GetAllOptions = {};
  if (options?.userId) {
    where.userId = options.userId;
  }
  if (options?.readingState) {
    where.readingState = options.readingState;
  }

  return await Record.findAll({
    offset: options?.start,
    limit: options?.display,
    where,
    order: [["createdAt", "DESC"]],
    ...includeAssociations,
  });
};

export const getTotalCount = async ({
  userId,
  readingState,
}: {
  userId: string;
  readingState?: ReadingState;
}) => {
  const where: GetAllOptions = {};
  if (userId) {
    where.userId = userId;
  }
  if (readingState) {
    where.readingState = readingState;
  }
  return await Record.count({
    where: where,
  });
};

export const getById = async (id: string) => {
  return await Record.findOne({
    where: { id },
    ...includeAssociations,
  });
};

export const getAllPublic = async () => {
  return await Record.findAll({
    where: { isPublic: true },
    ...includeAssociations,
  });
};

export const getAllPrivate = async () => {
  return await Record.findAll({
    where: { isPublic: false },
    ...includeAssociations,
  });
};

export const create = async (data: Omit<InferAttributes<Record>, "id">) => {
  const newRecord = await Record.create(data);
  const id = newRecord.dataValues.id;
  return Record.findOne({ where: { id }, ...includeAssociations });
};

export const update = async (
  id: string,
  data: Omit<InferAttributes<Record>, "id">
) => {
  const RecordId = await getById(id);
  await RecordId?.update({ ...Record, ...data });

  return Record.findOne({ where: { id }, ...includeAssociations });
};

export const remove = async (id: string) => {
  const RecordId = await getById(id);
  await RecordId?.destroy();
};
