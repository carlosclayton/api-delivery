import {Clients} from "../models/Clients";
import {Request, Response} from "express";
import {Deliveries} from "../models/Deliveries";

export interface IClientsRepository{
    create({username, password}: Clients): Object;
    deliveries(client_id: string): Object;
}