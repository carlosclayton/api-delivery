import {Request, Response} from "express";
import {ClientDeliveries} from "../modules/clients/clientDeliveries";
import {ClientService} from "../services/ClientService";
import {ClientsRepository} from "../repositories/ClientsRepository";

export class ClientController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body;
        const clientService = new ClientService(new ClientsRepository());
        const result = await clientService.create({
            username,
            password
        })

        return response.json(result)
    }

    async deliveries(request: Request, response: Response){
        const {client_id} = request;
        const clientService = new ClientService(new ClientsRepository());
        const result = clientService.deliveries(client_id)
        return response.json(result)
    }
}