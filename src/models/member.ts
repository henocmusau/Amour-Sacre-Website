import { DataTypes } from "sequelize";
import mainDB from "./";

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
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cityOfBirth: {
        type: DataTypes.STRING(50),
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY(),
    },
    gender: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    adhesionDate: {
        type: DataTypes.DATEONLY(),
        // defaultValue: new Date()
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
    image: {
        type: DataTypes.STRING(20),
    },

    // fullName: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         return `${this.lastName} ${this.middleName} ${this.firstName}`
    //     }
    // },
}, { paranoid: true, timestamps: true })