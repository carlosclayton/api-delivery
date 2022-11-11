import {Clients} from "../models/Clients";


export interface IClientsRepository{
    create({username, password}: Clients): Object;
    deliveries(client_id: string): Object;
}