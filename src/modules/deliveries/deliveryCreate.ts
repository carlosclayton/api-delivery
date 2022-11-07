import {prisma} from "../../database/prismaClient";
import {Deliveries} from "../../models/Deliveries";

export class DeliveryCreate {

    async execute({client_id, item_name}: Deliveries){
        return  await prisma.deliveries.create({
            data: {
                client_id,
                item_name
            }
        })

    }

}