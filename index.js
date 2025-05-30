import express from "express";
import adminRoutes from "./routes/adminRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import db from "./config/db.js";
const app = express();
const port = 4040;

//Conexion base de datos
try {
    await db.authenticate();
    db.sync();
    console.log("Database is conect succesfull")
} catch (error) {
    console.log("i cant conect to the database,")
}


app.set("view engine", "pug");
app.set("views", "./views/");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use("/", adminRoutes);
app.use("/cars/", carRoutes);






app.listen(port, ()=>{
    console.log(`server running in http://localhost:${port}`)
})