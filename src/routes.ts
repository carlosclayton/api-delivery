import {Router} from "express";
import {ClientController} from "./controllers/clientController";
import {AuthController} from "./controllers/authController";

const routes = Router();
const clientController = new ClientController();
const authController = new AuthController();

routes.post("/clients/", clientController.handle)
routes.post("/auth/", authController.handle)
export {routes}

