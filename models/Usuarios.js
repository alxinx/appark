import { DataTypes } from "sequelize";
import db from "../config/db.js";

const  Usuario = db.define('usuarios', {
    idUsuario : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false

    },
    name : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(100),
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING(250),
        allowNull : false,          
    },
    token : {
        type : DataTypes.STRING,
    },
    confirmado : DataTypes.BOOLEAN,

}, {
    tableName : "usuarios",
    timestamps : true 
});

export default Usuario