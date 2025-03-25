import Sequelize, { DataTypes } from "sequelize";
import db from "../config/db.js";
const Vehiculo = db.define('vehiculos', {
        IDVEHICULO : {
                type : DataTypes.INTEGER,
                autoIncrement : true,
                allowNull : false,
                primaryKey : true
            },
        PLACA : {
            type : DataTypes.STRING(10),
            allowNull : false,
            unique : true
        }, 
        FECHAREGISTRO : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : DataTypes.NOW
        },
    },
    {
        timestamps : false,
        tableName : "vehiculos"
    }
)

export default Vehiculo;