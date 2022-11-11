import {Router} from "express";
import {ClientController} from "./controllers/clientController";
import {AuthClientController} from "./controllers/authClientController";
import {AuthDelivermanController} from "./controllers/authDelivermanController";
import {DelivermanController} from "./controllers/delivermanController";
import {DeliveryController} from "./controllers/deliveryController";
import {IsAuthentication} from "./middlewares/isAuthentication";
import {UserController} from "./controllers/userController";

const routes = Router();
const clientController = new ClientController();
const delivermantController = new DelivermanController();
const authClientController = new AuthClientController();
const authDelivermanController = new AuthDelivermanController();
const deliveryController = new DeliveryController();
const userController = new UserController();

routes.post("/clients/", clientController.handle)
routes.get("/clients/deliveries", IsAuthentication, clientController.deliveries)
routes.post("/clients/auth/", authClientController.handle)

routes.post("/deliverman/", delivermantController.handle)
routes.post("/deliverman/auth/", authDelivermanController.handle)
routes.get("/deliverman/deliveries", IsAuthentication, delivermantController.deliveries)

routes.post("/deliveries/", IsAuthentication,  deliveryController.handle)
routes.put("/deliveries/:id", IsAuthentication,  delivermantController.update)
routes.get("/deliveries/available", IsAuthentication,  delivermantController.available)

routes.post("/users", userController.create);

export {routes}

