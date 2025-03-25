import express from "express";
import { addVehiculo, searchVehiculo} from "../controller/carControllers.js";
const routes = express.Router();

routes.get("/", addVehiculo);
routes.get("/search", searchVehiculo);



export default routes;