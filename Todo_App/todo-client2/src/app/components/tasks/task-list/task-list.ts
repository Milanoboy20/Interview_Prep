import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Task, TaskDTO } from '../../../classes/task';
import { Tasks } from '../tasks';
import { RouterLink } from '@angular/router';
import { User, UserDTO } from '../../../classes/user';
import { TaskService } from '../../services/task-service';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { UserSessionDataService } from '../../services/user-session-data-service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TaskList implements OnInit{

  @Input() user: User = new User;
  
  @Input() tasks: Task[] = [];

  @Input() completedTasks: Task[] = [];

  @Input() title: string = '';

  @Output() selectedTask = new EventEmitter<Task>();

  constructor(private taskService: TaskService, 
    private changes: ChangeDetectorRef,
    private userService: UserService,
    private userDataService: UserSessionDataService
  ) {}

  ngOnInit() {
    this.changes.detectChanges();
    // this.tasks;
  }

  selectTask(task: Task) {
    this.selectedTask.emit(task);
  }

  editTask(id: number, task: Task) {
    // this.taskService.editTask(id, task);
  }

  deleteTask(taskId: number){
    this.userService.deleteTask(taskId).subscribe((data) => {
      console.log('Task deleted!' + data);
      
      this.changes.detectChanges();
    });
    // this.ngOnInit();
  }

  deleteCompletedTask(taskId: number) {
    // this.taskService.deleteCompletedTask(taskId);
  }

  completeTask(taskId: number, task: Task) {
    task.complete = true;
    this.userService.editTask(taskId, this.makeTaskDTO(task)).subscribe((data) => {
      console.log('Task Complete!');
      this.changes.detectChanges();
    });

    // this.ngOnInit();
  }

  makeTaskDTO(task: Task) {
    const userDTO: UserDTO = {
      user_id: this.user.user_id,
      username: this.user.username,
      password: this.user.password,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email
    }
    const taskDTO: TaskDTO = {
      taskId: task.taskId,
      user: userDTO,
      taskType: task.taskType,
      description: task.description,
      complete: task.complete
    }

    return taskDTO;
  }
}
