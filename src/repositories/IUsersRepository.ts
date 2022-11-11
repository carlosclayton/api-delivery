import {Users} from "../models/Users";
import {IUserDTO} from "../interfaces/IUserDTO";


export interface IUsersRepository{
    create(data:IUserDTO): Promise<any>;
}