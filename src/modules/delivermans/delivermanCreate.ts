import {prisma} from "../../database/prismaClient";
import {hash} from "bcrypt";

export class DelivermanCreate {

    async execute({username, password}: IDeliverman){
        const result = await prisma.deliverman.findFirst({
            where: {
                username
            },
        })

        if (result) {
            throw new Error("Deliverman already exist")
        }

        const hasPassword = await hash(password, 10)
        const deliverman = await prisma.deliverman.create({
            data: {
                username,
                password: hasPassword
            }
        })
        return deliverman;
    }

}