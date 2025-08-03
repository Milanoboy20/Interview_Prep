import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable, Input, input, OnInit, signal } from '@angular/core';
import { Task } from './taskinterface';
import { TasksList } from "./tasks-list/tasks-list";
import { Taskservices } from './services/taskservices';


@Component({
  selector: 'app-tasks',
  imports: [TasksList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable({
  providedIn: 'root'
})

export class Tasks implements OnInit {
  message = input('Hello!');

  title: string = 'Tasks List';

  task !: Task;

  taskList: Task[] = [];

  completedTasks: Task[] = [];


  constructor(private taskService: Taskservices, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
  }

  editTask(id: number, task: Task) {
    this.taskService.editTask(id, task);
    // this.ngOnInit();
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.ngOnInit();
  }

  deleteCompletedTask(taskId: number) {
    this.taskService.deleteCompleted(taskId);
    this.ngOnInit();
  }

  completeTask(taskId: number) {
    this.taskService.completeTask(taskId);
    this.ngOnInit();
  }

  getTaskById(taskId: number) {
    return this.taskService.getById(taskId);
  }

  selectedTask(task: Task) {
    console.log(task);
    this.task = task;
  }


}
