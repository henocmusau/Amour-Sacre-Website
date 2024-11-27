import { DataTypes } from "sequelize";
import mainDB from "./";

export const Category = mainDB.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    label: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
})