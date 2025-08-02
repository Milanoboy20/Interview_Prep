import { Injectable } from '@angular/core';
import { Task } from '../taskinterface';
import { LocalStorageService } from './localstorageservice';

@Injectable({
  providedIn: 'root'
})


export class Taskservices {
  
  taskList: Task[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  getTasks() {
    return this.taskList;
  }

  addTask(task: Task) {
    // this.taskList.push(task);
    this.taskList = [...this.taskList, task];
  }

  editTask(task: Task) {
    this.taskList.map(t => {
      if(t.taskId === task.taskId){
        t.owner = task.owner;
        t.description = task.description;
        t.completed = task.completed;
      }
    });
  }

  deleteTask(taskId: string) {
    const newTaskList = this.taskList.filter(t => t.taskId !== taskId);
    this.taskList = newTaskList;
  }
}
