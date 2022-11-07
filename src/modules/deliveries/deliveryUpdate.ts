import {prisma} from "../../database/prismaClient";
import {Deliveries} from "../../models/Deliveries";

export class DeliveryUpdate {

    async execute({id, deliverman_id}: Deliveries){
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