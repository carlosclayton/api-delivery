import {prisma} from "../database/prismaClient";
import {hash} from "bcrypt";
import {injectable, singleton} from "tsyringe";
import {IUsersRepository} from "./IUsersRepository";
import {IUserDTO} from "../interfaces/IUserDTO";

@singleton()
@injectable()
export class UsersRepository implements IUsersRepository{
    async create(user: IUserDTO) {
        const result = await prisma.users.findFirst({
            where: {
                username: user.username
            },
        })

        if (result) {
            throw new Error("User already exist")
        }
        const hasPassword = await hash(user.password, 10)
        return  await prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                username: user.username,
                password: hasPassword,
                driver_licence:user.driver_licence,
                role: user.role
            }
        })
    }
}
