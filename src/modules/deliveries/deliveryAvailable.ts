import {prisma} from "../../database/prismaClient";
import {IDelivery} from "../../interfaces/IDelivery";

export class DeliveryAvailable {

    async execute(){
        return  await prisma.deliveries.findMany({
            where: {
                deliverman_id: null,
                deliveryman_at: null

            }
        })

    }

}