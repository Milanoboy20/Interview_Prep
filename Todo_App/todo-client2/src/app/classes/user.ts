import { Task } from "./task";

export class User {

    user_id!: number;
    username!: string;
    password!: string;
    firstname!: string;
    lastname!: string;
    email!: string;
    tasks!: Task[];
    isAdmin!: boolean;
}

export class UserDTO {
    user_id!: number;
    username!: string;
    password!: string;
    firstname!: string;
    lastname!: string;
    email!: string;
}
