import { DataTypes } from "sequelize";
import mainDB from "./";
import { Category } from "./categories";

export const Member = mainDB.define('member', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING(50),
        defaultValue: ''
        // allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        // defaultValue: ''
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        },
        allowNull: false
    }
    // fullName: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         return `${this.lastName} ${this.middleName} ${this.firstName}`
    //     }
    // },
})
