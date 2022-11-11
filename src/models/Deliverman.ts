import {Role} from "../types/Role";

export class Deliverman{
    id?: string;
    username: string;
    password: string;
    email: string;
    driver_licence: string;
    role: Role;
    created_at: Date;
}