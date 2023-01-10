import {config as dotenv} from 'dotenv';
dotenv();



export const config = {
    host: process.env.DB_HOST || 'localhost', //|| 'us-cdbr-east-06.cleardb.net', //|| 'localhost',
    user: process.env.DB_USER || 'root', //|| 'bf67817d20bd7d', //|| 'root',
    password: process.env.DB_PASSWORD || '', //|| 'efe0c352',
    database: process.env.DB_DATABASE || 'roomsdb', //||heroku_8a6f8975e3bfe1e
}