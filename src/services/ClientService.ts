import {IClientsRepository} from "../repositories/IClientsRepository";
import {Clients} from "../models/Clients";
import {inject, injectable} from "tsyringe";

@injectable()
export class ClientService {
    constructor(
        @inject("ClientsRepository") public clientRepository: IClientsRepository
    ) {
    }

    create({username, password}: Clients) {
        return this.clientRepository.create({username, password});
    }
    deliveries(client_id: string) {
        return this.clientRepository.deliveries(client_id)
    }
}