import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tasks } from '../tasks';
import { Task, TaskDTO } from '../../../classes/task';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { User, UserDTO } from '../../../classes/user';
import { UserSessionDataService } from '../../services/user-session-data-service';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class AddTask implements OnInit{


   task: Task = {
    taskId: 0,
    taskType: '',
    description: '',
    complete: false,
  }

  user: User = new User;

  success: string = '';

  id: number = 0;
  isEditMode: boolean = false;
  form!: FormGroup;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userDataService: UserSessionDataService
  ) { }

  ngOnInit() {
    this.getUser();
    console.log("User: " + this.user)

    //get id to determine if update or create task
    this.id = this.route.snapshot.params['id'];
    
    console.log("Task ID: " + this.id);


    this.isEditMode = this.id > 0;

    this.form = this.formBuilder.group({
      taskType: new FormControl(""),
      description: new FormControl("")
    })

    if (this.isEditMode) {
      this.userService.getTaskById(this.id).subscribe((data) => {
        this.task = data;
        console.log(this.task)
        
        //populate edit form values
        this.form.patchValue(
        {
        taskType: this.task.taskType,
        description: this.task.description
      }
    );
      });
      console.log("Data to edit: " + this.task);
     
    }
  }

  submitTask() {
    const formValue = this.form.value;

    const userDTO: UserDTO = {
      user_id: this.user.user_id,
      username: this.user.username,
      password: this.user.password,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email
    }
    
    const taskDTO: TaskDTO = {
      taskId: this.id,
      user: userDTO,
      description: formValue.description,
      taskType: formValue.taskType,
      complete: false
    }

    

    if (!this.isEditMode) {
      console.log('Add Task: ' + taskDTO.user);
      this.userService.addTask(taskDTO).subscribe((data) => {
        console.log('Data in subscribe: ' + data);
      });
      
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    else {
      this.userService.editTask(this.id, taskDTO).subscribe((data) => {
        console.log('Task updates successfully! ' + data);
      });
      console.log('Form: ' + this.form.value);
      this.router.navigate(['../../'], { relativeTo: this.route });
    }

    
  }

  getUser(){
    this.user = this.userDataService.getCurrentUser();
    this.userService.getUserById(this.user.user_id).subscribe((data) => {
      this.user = data;
      console.log(this.user)
    });
  }

}
