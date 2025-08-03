import { ChangeDetectorRef, inject, Injectable } from '@angular/core';
import { Task } from '../taskinterface';
import { LocalStorageService } from './localstorageservice';

@Injectable({
  providedIn: 'root'
})


export class Taskservices {

  taskList: Task[] = [];

  // tasks = inject(Tasks);
  completedTasks: Task[] = [];

  // constructor(private localStorageService: LocalStorageService,) { }

  getTasks() {
    return this.taskList;
  }

  getCompletedTasks() {
    return this.completedTasks;
  }

  getById(taskId: number) {
    return this.taskList.find((t) => {t.taskId === taskId});
  }

  addTask(task: Task) {
    // this.taskList.push(task);
    if (this.taskList.length === 0) {
      task.taskId = 1;
    } else {
      task.taskId = this.getTaskId();
    }

    this.taskList = [...this.taskList, task];
  }

  editTask(id: number, task: Task) {
    this.taskList.map(t => {
      if (t.taskId === task.taskId) {
        t.owner = task.owner;
        t.description = task.description;
        t.completed = task.completed;
      }
    });

    // let newList = this.taskList.map( item => 
    //   (item.taskId === id) ? { ...item, owner: task.owner , description: task.description, taskType: task.taskType } 
    //   : item
    // );
    
    // this.taskList = [...newList];
  }

  deleteTask(taskId: number) :void{
    this.taskList = this.taskList.filter((t) => t.taskId !== taskId);
  }

  deleteCompleted(taskId: number) {
    this.completedTasks = this.completedTasks.filter((t) => t.taskId !== taskId);
    
    console.log("Deleted completed task!")
  }

  completeTask(taskId: number) {
    this.taskList.map(t => {
      if(t.taskId === taskId) {
        t.completed = true;
        this.completedTasks = [...this.completedTasks, t];
      }
      
    });
    console.log(this.taskList)

    //rerender tasksList
    this.taskList = this.taskList.filter((t) => t.completed !== true);
  }

  getTaskId() {
    this.taskList.sort((a, b) => a.taskId - b.taskId);
    return 1 + this.taskList[this.taskList.length - 1].taskId;
  }
}
