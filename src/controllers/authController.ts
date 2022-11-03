import {Request, Response} from "express";
import {Auth} from "../services/auth";


export class AuthController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body;

        const auth  = new Auth();
        const result = await auth.execute({
            username,
            password
        })
        return response.json(result)
    }
}