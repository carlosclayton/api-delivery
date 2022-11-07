import {ClientService} from "../services/ClientService";
import {ClientsRepository} from "../repositories/ClientsRepository";

const clientService = new ClientService(new ClientsRepository());
export {clientService}