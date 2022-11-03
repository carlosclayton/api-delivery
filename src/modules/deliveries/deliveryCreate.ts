import {prisma} from "../../database/prismaClient";
import {IDelivery} from "../../interfaces/IDelivery";

export class DeliveryCreate {

    async execute({client_id, item_name}: IDelivery){
        return  await prisma.deliveries.create({
            data: {
                client_id,
                item_name
            }
        })

    }

}