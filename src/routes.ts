import {Router} from "express";
import {ClientController} from "./controllers/clientController";
import {AuthClientController} from "./controllers/authClientController";
import {AuthDeliverman} from "./services/authDeliverman";
import {AuthDelivermanController} from "./controllers/authDelivermanController";
import {DelivermanController} from "./controllers/delivermanController";

const routes = Router();
const clientController = new ClientController();
const delivermantController = new DelivermanController();
const authClientController = new AuthClientController();
const authDelivermanController = new AuthDelivermanController();

routes.post("/clients/", clientController.handle)
routes.post("/clients/auth/", authClientController.handle)

routes.post("/deliverman/", delivermantController.handle)
routes.post("/deliverman/auth/", authDelivermanController.handle)


export {routes}

