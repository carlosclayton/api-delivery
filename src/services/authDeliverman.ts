import {prisma} from "../database/prismaClient";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";

export class AuthDeliverman {
    async execute({username, password}: IDeliverman){
        const client = await prisma.deliverman.findFirst({
            where: {
                username
            }
        })

        if(!client){
            throw new Error("Username invalid")
        }

        const passwordMatch = await compare(password, client.password)

        if(!passwordMatch){
            throw new Error("Password invalid")
        }

        const token = sign({username}, process.env.HASH_KEY, {
            subject: client.id,
            expiresIn: "1d"
        })

        return {
            token
        }
    }
}