import {Request, Response} from "express";
import {userService} from "./index";
import {IUserDTO} from "../interfaces/IUserDTO";

export class UserController {
    async create(request: Request, response: Response) {
        const data: IUserDTO = request.body;
        const result = await userService.create(data)
        return response.json(result)
    }
}