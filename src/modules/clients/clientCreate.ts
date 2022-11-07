import {prisma} from "../../database/prismaClient";
import {hash} from "bcrypt";
import {Clients} from "../../models/Clients";

export class ClientCreate {

    async execute({username, password}: Clients){
        const result = await prisma.clients.findFirst({
            where: {
                username
            },
        })

        if (result) {
            throw new Error("Client already exist")
        }

        const hasPassword = await hash(password, 10)
       return await prisma.clients.create({
            data: {
                username,
                password: hasPassword
            }
        })

    }

}