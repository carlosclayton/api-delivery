import {prisma} from "../../database/prismaClient";
import {hash} from "bcrypt";

export class ClientCreate {

    async execute({username, password}: IClient){
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