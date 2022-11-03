import {prisma} from "../database/prismaClient";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";

export class AuthClient {
    async execute({username, password}: IClient){
        const client = await prisma.clients.findFirst({
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