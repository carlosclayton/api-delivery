import {prisma} from "../../database/prismaClient";
import {hash} from "bcrypt";
import {IDelivery} from "../../interfaces/IDelivery";

export class ClientDeliveries {
    async execute({client_id}: IDelivery){
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