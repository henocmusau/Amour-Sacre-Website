import { DataTypes } from "sequelize";
import mainDB from ".";

export const News = mainDB.define('news', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(),
    },
    status: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    // author:{
    //     type: DataTypes.INTEGER()
    // }
})
