import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Task } from '../taskinterface';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tasks } from '../tasks';
import { Taskservices } from '../services/taskservices';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-add-task',
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class AddTask {

  task: Task = {
    taskId: 0,
    owner: '',
    taskType: '',
    description: '',
    completed: false,
  }

  success: string = '';

  id: number = 0;
  // route: ActivatedRoute = new ActivatedRoute;
  // id$ !: Observable<number>;
  isEditMode: boolean = false;
  form!: FormGroup;

  constructor(private taskService: Tasks,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    //get id to determine if update or create task
    this.id = this.route.snapshot.params['id'];
    // this.route.params.subscribe((params) => { this.id = params['id']});
    // this.id$ = this.route.paramMap.pipe(map((params) =>  params.get('id')));

    console.log("Task ID: " + this.id);


    this.isEditMode = this.id > 0;

    this.form = this.formBuilder.group({
      owner: ['', Validators.required],
      taskType: ['', Validators.required],
      description: ['', Validators.required]
    })

    if (this.isEditMode) {
      // let oldTask = this.taskService.getTasks().find((t) => t.taskId === this.id);
      const oldTask = this.taskService.getTaskById(this.id);
      console.log("Data to edit: " + oldTask);
      // console.log("Current Tasks: " + this.taskService.getTasks()[0].owner)

      this.form.patchValue({
        owner: oldTask?.owner,
        taskType: oldTask?.taskType,
        description: oldTask?.description
      });
    }
  }

  submitTask() {
    if (!this.isEditMode) {
      this.taskService.addTask(this.form.value);
      this.success = "Successful!"
      this.form.reset();
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    else {
      this.taskService.editTask(this.id, this.form.value);
      console.log('Form: ' + this.form.value.owner);
      this.router.navigate(['../../'], { relativeTo: this.route });
    }

  }

  // updateTask(task: Task) {
  //   this.taskService.editTask(task);
  // }
}
