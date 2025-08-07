import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../../classes/user';
import { Task } from '../../classes/task';
import { TaskList } from "./task-list/task-list";
import { Observable } from 'rxjs';
import { UserSessionDataService } from '../services/user-session-data-service';

@Component({
  selector: 'app-tasks',
  imports: [TaskList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class Tasks {

  title: string = 'Tasks List';
  
  user!: User;

  tasksList: Task[] = [];

  taskList$ = Observable<any>;

  constructor(private changes: ChangeDetectorRef,
    private userService: UserService,
    private userDataService: UserSessionDataService
  ) {}

  ngOnInit(): void {
    //set user to currently logged in user
    this.user = this.userDataService.getCurrentUser();
    // console.log("Current user ID: " + this.user.user_id);
    this.getUserById(this.user.user_id);
    // console.log("Tasks was called!");
    this.changes.detectChanges();
  }

  private getUserById(userId: number) {
    this.userService.getUserById(userId).subscribe((data) => {
      let taskFilter = data.tasks.filter((t) => t.complete !== true);
      
      this.tasksList = taskFilter;
      this.changes.detectChanges();
      console.log(data);
    });

    this.tasksList = this.tasksList.filter((t) => t.complete !== true);
  }
}
