import {prisma} from "../../database/prismaClient";
import {IDelivery} from "../../interfaces/IDelivery";
import {request} from "express";

export class DeliveryUpdate {

    async execute({id, deliverman_id}: IDelivery){
        console.log(deliverman_id)
        return  await prisma.deliveries.update({
            where: {
                id
            },
            data: {
                deliverman_id
            }
        })

    }

}