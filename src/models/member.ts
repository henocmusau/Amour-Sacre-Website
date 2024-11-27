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
    // gender: {
    //     type: DataTypes.ENUM('1', '2')
    // },
    // categoryId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Category,
    //         key: 'id'
    //     },
    //     allowNull: false
    // },
    category: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    adress: {
        type: DataTypes.TEXT(),
        // allowNull: false
    },
    email: {
        type: DataTypes.STRING(60),
    },
    adhesionDate: {
        type: DataTypes.DATEONLY(),
        defaultValue: new Date()
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    cityOfBirth: {
        type: DataTypes.STRING(50),
    },
    DateOfBirth: {
        type: DataTypes.STRING(20),
    },
    Job: {
        type: DataTypes.STRING(50),
    },
    // fullName: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         return `${this.lastName} ${this.middleName} ${this.firstName}`
    //     }
    // },
})