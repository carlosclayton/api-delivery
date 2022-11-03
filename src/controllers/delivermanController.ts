import {Request, Response} from "express";
import {ClientCreate} from "../modules/clients/clientCreate";
import {DelivermanCreate} from "../modules/delivermans/delivermanCreate";

export class DelivermanController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body;

        const deliverman = new DelivermanCreate();
        const result = await deliverman.execute({
            username,
            password
        })

        return response.json(result)
    }
}