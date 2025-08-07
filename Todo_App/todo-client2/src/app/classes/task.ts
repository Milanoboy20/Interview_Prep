import { User, UserDTO } from "./user";

export class Task {
    taskId!: number;
    // user!: User;
    taskType!: string;
    description!: string;
    complete!: boolean;
}

export class TaskDTO {
    taskId!: number;
    user!: UserDTO;
    taskType!: string;
    description!: string;
    complete!: boolean;
}
