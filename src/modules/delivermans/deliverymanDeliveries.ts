import {prisma} from "../../database/prismaClient";
import {Deliveries} from "../../models/Deliveries";

export class DeliverymanDeliveries {
    async execute({client_id}: Deliveries){
        return await prisma.deliverman.findFirst({
            where: {
                id: client_id
            },
            select: {
                id: true,
                username: true,
                deliveries:true
            }
        })
    }
}