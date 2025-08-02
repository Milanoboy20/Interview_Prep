import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../taskinterface';
import { Taskservices } from '../services/taskservices';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})


export class TasksList {


  @Input() tasks: Task[] | null = [];

  @Input() title: string = '';

  @Output() selectedTask = new EventEmitter<Task>();

  constructor(private taskService: Tasks) {}

  selectTask(task: Task) {
    this.selectedTask.emit(task);
  }

  editTask(task: Task) {
    this.taskService.editTask(task);
  }

  deleteTask(taskId: string){
    this.taskService.deleteTask(taskId);
  }

  completeTask(taskId: string) {

  }

}
