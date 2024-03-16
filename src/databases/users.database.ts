import { User } from "../models/user";

export const users: User[] = [];

export function addUser(newUser: User): void {
    users.push(newUser);
}


