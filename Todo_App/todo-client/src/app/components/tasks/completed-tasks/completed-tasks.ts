import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Task } from '../taskinterface';
import { Taskservices } from '../services/taskservices';
import { TasksList } from '../tasks-list/tasks-list';

@Component({
  selector: 'app-completed-tasks',
  imports: [TasksList],
  templateUrl: './completed-tasks.html',
  styleUrl: './completed-tasks.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CompletedTasks implements OnInit{

  completedTasks: Task[] = [];

  title: string = 'Completed Tasks';

  constructor(private taskService: Taskservices, private change: ChangeDetectorRef){}

  ngOnInit() {
    this.completedTasks = this.taskService.getCompletedTasks();
    // this.change.detectChanges()
  }

  deleteCompletedTask(taskId: number){
    this.taskService.deleteCompleted(taskId);
    // this.change.detectChanges();
    this.ngOnInit();
  }
}
