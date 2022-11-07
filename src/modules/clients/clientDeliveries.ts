import {prisma} from "../../database/prismaClient";
import {Deliveries} from "../../models/Deliveries";

export class ClientDeliveries {
    async execute({client_id}: Deliveries){
        return await prisma.clients.findFirst({
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