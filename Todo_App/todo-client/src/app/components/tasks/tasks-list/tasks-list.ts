import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../taskinterface';
import { Taskservices } from '../services/taskservices';
import { Tasks } from '../tasks';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  imports: [RouterLink],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TasksList implements OnInit{


  @Input() tasks: Task[] = [];

  @Input() title: string = '';

  @Output() selectedTask = new EventEmitter<Task>();

  constructor(private taskService: Tasks, private changes: ChangeDetectorRef) {}

  ngOnInit() {
    
  }

  selectTask(task: Task) {
    this.selectedTask.emit(task);
  }

  editTask(id: number, task: Task) {
    this.taskService.editTask(id, task);
  }

  deleteTask(taskId: number){
    this.taskService.deleteTask(taskId);
  }

  deleteCompletedTask(taskId: number) {
    this.taskService.deleteCompletedTask(taskId);
  }

  completeTask(taskId: number) {
    this.taskService.completeTask(taskId);
  }

}
