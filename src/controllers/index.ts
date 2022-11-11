import "reflect-metadata";
import {container} from "tsyringe";
import {ClientService} from "../services/ClientService";
import {ClientsRepository} from "../repositories/ClientsRepository";
import {IClientsRepository} from "../repositories/IClientsRepository";
import {IUsersRepository} from "../repositories/IUsersRepository";
import {UsersRepository} from "../repositories/UsersRepository";
import {UserService} from "../services/UserService";

// Client DI
container.registerInstance<IClientsRepository>("ClientsRepository", new ClientsRepository)
const clientService = container.resolve(ClientService)


// User DI
container.registerInstance<IUsersRepository>("UsersRepository", new UsersRepository)
const userService = container.resolve(UserService)


export {clientService, userService}