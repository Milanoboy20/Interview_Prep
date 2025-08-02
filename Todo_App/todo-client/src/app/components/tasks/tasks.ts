import { Component, Input, input } from '@angular/core';
import { Task } from './taskinterface';
import { TasksList } from "./tasks-list/tasks-list";
import { Taskservices } from './services/taskservices';

@Component({
  selector: 'app-tasks',
  imports: [TasksList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  message = input('Hello!');

  title: string = 'Tasks List';

  taskList: Task[] = [
    {
      taskId: '1',
      owner: 'Abdul Samad',
      description: 'Grocery shopping!',
      completed: false
    }
  ];


  newTask: string = '';

  constructor(private taskService: Taskservices) { }

  addTask() {
    // this.taskList.push(task);
    const task: Task = {
      taskId: `${this.getTaskId()}`,
      owner: 'Mallam',
      description: 'New Task',
      completed: false
    }
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

  getTaskId() {
    this.taskList.sort((a,b) => parseInt(a.taskId) - parseInt(b.taskId));
    return 1 + parseInt(this.taskList[this.taskList.length - 1].taskId);
  }

}
