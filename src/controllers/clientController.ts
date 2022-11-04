import {Request, Response} from "express";
import {ClientCreate} from "../modules/clients/clientCreate";
import {ClientDeliveries} from "../modules/clients/clientDeliveries";

export class ClientController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body;

        const client = new ClientCreate();
        const result = await client.execute({
            username,
            password
        })

        return response.json(result)
    }

    async deliveries(request: Request, response: Response){
        const {client_id} = request;

        const client = new ClientDeliveries();
        const result = await client.execute({
            client_id
        })

        return response.json(result)
    }
}