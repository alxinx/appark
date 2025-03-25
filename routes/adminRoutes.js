import express from "express";
import {loginAdmin,registerAdmin,forgotAdmin, registro} from "../controller/adminControllers.js"
const routes = express.Router();

routes.get("/", loginAdmin);
routes.get( "/register", registerAdmin);
routes.get("/forgot", forgotAdmin);

//POST
routes.post("/register", registro);




export default routes;