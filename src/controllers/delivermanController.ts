import {request, Request, Response} from "express";
import {DelivermanCreate} from "../modules/delivermans/delivermanCreate";
import {DeliveryAvailable} from "../modules/deliveries/deliveryAvailable";
import {DeliveryUpdate} from "../modules/deliveries/deliveryUpdate";

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
    async available(request: Request, response: Response){
        const deliverman = new DeliveryAvailable();
        const result = await deliverman.execute()
        return response.json(result)
    }

    async update(request: Request, response: Response){
        const deliverman_id = request.client_id
        const {id} = request.params
        const deliverman = new DeliveryUpdate();
        const result = await deliverman.execute({id, deliverman_id})
        return response.json(result)
    }


}