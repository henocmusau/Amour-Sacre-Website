import { Sequelize } from "sequelize";
// import * as pg from 'pg'
import sqlite from 'sqlite3'
// import mysql from 'mysql2/promise';

const mainDB = new Sequelize(
    // process.env.DB_NAME!,
    // process.env.DB_USER!,
    // process.env.DB_PASSWORD!,
    // 'amoursacre', 'postgres', '1963',
    {
        // host: process.env.DB_HOST!,
        // port: 5432, //5432 POSTGRESS 3306 MYSQL
        // dialect: 'mysql',
        // dialectModule: mysql,
        dialect: 'sqlite',
        storage: '../../database.sqlite',
        dialectModule: sqlite,
        // dialect: 'postgres',
        // dialectModule: pg,
        // ssl: true
    }
)

export default mainDB