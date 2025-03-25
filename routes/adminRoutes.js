import express from "express";
import {loginAdmin,registerAdmin,forgotAdmin, registro} from "../controller/adminControllers.js"
const routes = express.Router();

routes.get("/", loginAdmin);

routes.get( "/register", registerAdmin);
routes.post("/register", registro);

routes.get("/forgot", forgotAdmin);




export default routes;