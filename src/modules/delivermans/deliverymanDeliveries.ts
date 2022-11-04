import {prisma} from "../../database/prismaClient";
import {hash} from "bcrypt";
import {IDelivery} from "../../interfaces/IDelivery";

export class DeliverymanDeliveries {
    async execute({client_id}: IDelivery){
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