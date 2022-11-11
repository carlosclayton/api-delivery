import {IClientsRepository} from "./IClientsRepository";
import {Clients} from "../models/Clients";
import {prisma} from "../database/prismaClient";
import {hash} from "bcrypt";
import {injectable, singleton} from "tsyringe";

@singleton()
@injectable()
export class ClientsRepository implements IClientsRepository{
    async create({username, password}: Clients) {
        const result = await prisma.clients.findFirst({
            where: {
                username
            },
        })

        if (result) {
            throw new Error("Client already exist")
        }
        const hasPassword = await hash(password, 10)
        return  await prisma.clients.create({
            data: {
                username,
                password: hasPassword
            }
        })
    }

    async deliveries(client_id: string){
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
