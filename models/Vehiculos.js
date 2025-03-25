import Sequelize, { DataTypes } from "sequelize";
import db from "../config/db.js";
const Vehiculo = db.define('vehiculos', {
        idVehiculo : {
                type : DataTypes.INTEGER,
                autoIncrement : true,
                allowNull : false,
                primaryKey : true
            },
        placa : {
            type : DataTypes.STRING(10),
            allowNull : false,
            unique : true
        }, 
        fechaRegistro : {
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