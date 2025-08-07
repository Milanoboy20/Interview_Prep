import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../classes/user';
import { Task } from '../../classes/task';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  
  private base_URL = "http://localhost:8080/api/v1/users";

  private baseTask_URL = "http://localhost:8080/api/v1/tasks";

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(this.base_URL);
  }

  getUserById(userId: number) {
    return this.httpClient.get<User>(`${this.base_URL}/${userId}`);
  }

  getCompletedTasks(userId: number)  {
    return this.httpClient.get<User>(`${this.base_URL}/${userId}`);
  }

  getTaskById(taskId: number) {
    return this.httpClient.get<Task>(`${this.baseTask_URL}/${taskId}`);
  }

  addTask(task: Task) {
    return this.httpClient.post<Task>(this.baseTask_URL, task);
  }

  editTask(id: number, task: Task) {
    return this.httpClient.put<Task>(`${this.baseTask_URL}/${id}`, task);
  }

  deleteTask(taskId: number) {
    return this.httpClient.delete(`${this.baseTask_URL}/${taskId}`);
  }

}
