import {Request, Response} from "express";
import {ClientCreate} from "../modules/clients/clientCreate";
import {DelivermanCreate} from "../modules/delivermans/delivermanCreate";
import {DeliveryCreate} from "../modules/deliveries/deliveryCreate";

export class DeliveryController{
    async handle(request: Request, response: Response){
        const {client_id, item_name} = request.body;

        const delivery = new DeliveryCreate();
        const result = await delivery.execute({
            client_id,
            item_name
        })

        return response.json(result)
    }
}