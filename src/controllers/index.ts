import "reflect-metadata";
import {container} from "tsyringe";
import {ClientService} from "../services/ClientService";

import {ClientsRepository} from "../repositories/ClientsRepository";
import {ITestRepository} from "../scripts/ITestRepository";
import {TestRepository} from "../scripts/TestRepository";
import {IClientsRepository} from "../repositories/IClientsRepository";

// const clientService = new ClientService(new ClientsRepository());
// const clientService = new ClientService();
// export {clientService}
container.registerInstance<IClientsRepository>("ClientsRepository", new ClientsRepository)
const clientService = container.resolve(ClientService)
export {clientService}