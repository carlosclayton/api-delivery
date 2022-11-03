import {Request, Response} from "express";
import {AuthClient} from "../services/authClient";


export class AuthClientController {
    async handle(request: Request, response: Response){
        const {username, password} = request.body;

        const auth  = new AuthClient();
        const result = await auth.execute({
            username,
            password
        })
        return response.json(result)
    }
}