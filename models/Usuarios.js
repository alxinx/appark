import { DataTypes } from "sequelize";
import db from "../config/db.js";

const  Usuario = db.define('usuarios', {
    IDUSUARIO : {
        type : DataTypes.INTEGER(10),
        autoIncrement : true,
        primaryKey : true,
        allowNull : false

    },
    NOMBRE : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    EMAIL : {
        type : DataTypes.STRING(100),
        allowNull : false,
    },
    PASSWORD : {
        type : DataTypes.STRING(100),
        allowNull : false,          
    },
    TOKEN : {
        type : DataTypes.STRING,
    },
    CONFIRMADO : DataTypes.BOOLEAN,   
    
});

export default Usuario