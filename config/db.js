import { Sequelize } from "sequelize";
import dotevent from "dotenv";
dotevent.config();
const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect : "mysql",
    define : {
        timestamps : true
    },
    pool : {
        min : 0,
        max : 5,
        acquire : 30000,
        idle : 10000
    },
    logging : false,
    minifyAliases : false,
} )

export default db