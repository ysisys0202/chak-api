import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../db/database.js";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare loginId: string;
  declare nickname: string;
  declare email: string;
  declare password: string;
  declare profileImage: CreationOptional<string>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nickname: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    loginId: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

export const createUser = async (user: Omit<InferAttributes<User>, "id">) => {
  return await User.create(user).then((data) => data.dataValues.id);
};

export const findUser = async (
  key: keyof Pick<
    InferAttributes<User>,
    "loginId" | "nickname" | "email" | "id"
  >,
  value: string
): Promise<User | null> => {
  return await User.findOne({ where: { [key]: value } });
};
