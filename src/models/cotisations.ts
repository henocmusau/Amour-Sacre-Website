import { DataTypes } from "sequelize";
import mainDB from "./";
import { Member } from "./member";

export const Cotisation = mainDB.define('cotisation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
    memberId: {
        type: DataTypes.INTEGER,
        references: {
            model: Member,
            key: 'id'
        },
        allowNull: false
    },
    month: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})

// identifiant, montant, date de paiement, membre associé, etc.