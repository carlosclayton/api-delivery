import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../repositories/IUsersRepository";
import {Users} from "../models/Users";
import {IUserDTO} from "../interfaces/IUserDTO";

@injectable()
export class UserService {
    constructor(
        @inject("UsersRepository") public userRepository: IUsersRepository
    ) {
    }

    create(data:IUserDTO) {
        return this.userRepository.create(data);
    }

}