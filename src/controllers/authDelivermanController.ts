import {Request, Response} from "express";
import {AuthClient} from "../services/authClient";
import {AuthDeliverman} from "../services/authDeliverman";


export class AuthDelivermanController{
    async handle(request: Request, response: Response){
        const {username, password} = request.body;

        const auth  = new AuthDeliverman();
        const result = await auth.execute({
            username,
            password
        })
        return response.json(result)
    }
}