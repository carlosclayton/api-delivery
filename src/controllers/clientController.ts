import {Request, Response} from "express";
import {clientService} from "./index";

export class ClientController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body;
        const result = await clientService.create({
            username,
            password
        })

        return response.json(result)
    }

    async deliveries(request: Request, response: Response){
        const {client_id} = request;
        const result = clientService.deliveries(client_id)
        return response.json(result)
    }
}