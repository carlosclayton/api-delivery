import {prisma} from "../../database/prismaClient";
import {hash} from "bcrypt";
import {Deliveries} from "../../models/Deliveries";
import {Deliverman} from "../../models/Deliverman";

export class DelivermanCreate {

    async execute({username, password}: Deliverman) {
        const result = await prisma.deliverman.findFirst({
            where: {
                username
            },
        })

        if (result) {
            throw new Error("Deliverman already exist")
        }

        const hasPassword = await hash(password, 10)
        return await prisma.deliverman.create({
            data: {
                username,
                password: hasPassword
            }
        })

    }

}