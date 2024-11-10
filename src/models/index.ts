import { Sequelize } from "sequelize";
// import * as pg from 'pg'
import mysql from 'mysql2/promise';

const mainDB = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST!,
        port: 3306, //5432 POSTGRESS
        dialect: 'mysql',
        dialectModule: mysql,
        // ssl: true
    }
)

export default mainDB