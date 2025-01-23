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
    cityOfBirth: {
        type: DataTypes.STRING(50),
    },
    dateOfBirth: {
        type: DataTypes.STRING(20),
    },
    gender: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    adhesionDate: {
        type: DataTypes.DATEONLY(),
        defaultValue: new Date()
    },
    category: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    job: {
        type: DataTypes.STRING(50),
    },
    adress: {
        type: DataTypes.TEXT(),
        // allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    email: {
        type: DataTypes.STRING(60),
        unique: true
    },

    // fullName: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         return `${this.lastName} ${this.middleName} ${this.firstName}`
    //     }
    // },
})