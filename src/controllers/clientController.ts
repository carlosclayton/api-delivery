import {Request, Response} from "express";
import {ClientCreate} from "../modules/clients/clientCreate";

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
}