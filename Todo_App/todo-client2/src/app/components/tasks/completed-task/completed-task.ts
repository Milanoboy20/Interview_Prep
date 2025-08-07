import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../../../classes/task';
import { UserService } from '../../services/user-service';
import { TaskList } from "../task-list/task-list";
import { User } from '../../../classes/user';
import { UserSessionDataService } from '../../services/user-session-data-service';

@Component({
  selector: 'app-completed-task',
  imports: [TaskList],
  templateUrl: './completed-task.html',
  styleUrl: './completed-task.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class CompletedTask implements OnInit, OnChanges{

  completedTasks: Task[] = [];

  user!: User;

  title: string = 'Completed Tasks';

  constructor(private userService: UserService,
    private changes: ChangeDetectorRef,
    private userDataService: UserSessionDataService
  ) {}

  ngOnInit() {
    this.user = this.userDataService.getCurrentUser();
    console.log("Current user ID in completedt task: " + this.user.user_id)
    this.loadCompletedTasks();
    this.changes.detectChanges()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['completedTasks']){
      console.log('Changes in completed tasks: ' + changes);
    }
    throw new Error('Method not implemented.');
  }

  loadCompletedTasks() {
    this.userService.getUserById(this.user.user_id).subscribe((data) => {
      this.completedTasks = data.tasks.filter((t) => t.complete === true);
      console.log(this.completedTasks);

      console.log("Completed tasks: " + this.completedTasks);
      this.changes.detectChanges();
    });
      
      console.log("Completed tasks was called!")
  }

  deleteCompletedTask(taskId: number) {
    // this.userService.deleteCompletedTask(taskId);
  }
}
