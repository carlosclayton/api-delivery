import {IClientsRepository} from "../repositories/IClientsRepository";
import {Clients} from "../models/Clients";
import { Service } from "typedi";
import {Deliveries} from "../models/Deliveries";
import {Request} from "express";

@Service()
export class ClientService {

    constructor(private readonly clientRepository: IClientsRepository) {
    }

    create({username, password}: Clients) {
        return this.clientRepository.create({username, password});
    }
    deliveries(client_id: string) {
        return this.clientRepository.deliveries(client_id)
    }




}