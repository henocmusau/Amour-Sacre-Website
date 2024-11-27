import { DataTypes } from "sequelize";
import mainDB from ".";

export const Outgoing = mainDB.define('outgoing', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
    type: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    justificatif: {
        type: DataTypes.STRING(50)
    }
})

//  identifiant, montant, date, type de recette (cotisations, dons, subventions, etc.).