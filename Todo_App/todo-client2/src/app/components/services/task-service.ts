import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../classes/task';

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  
  private base_URL = 'http://localhost:8080/api/v1/tasks';

  constructor(private httpClient: HttpClient) {}

  getTasksList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.base_URL);
  }

  completeTask(taskId: number, task: Task) {
    return this.httpClient.put<Task>(`${this.base_URL}/${taskId}`, task);
  }
}
