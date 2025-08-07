import { Component } from '@angular/core';
import { LoginService } from '../services/login-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../classes/login-request';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSessionDataService } from '../services/user-session-data-service';
import { User } from '../../classes/user';
import { AuthService } from '../../guards/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login {


  constructor(private service: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private userDataService: UserSessionDataService,
    private authService: AuthService
  ){}

  userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  request: LoginRequest = new LoginRequest;

  currentUser?: User;

  doLogin() {
    const formValue = this.userForm.value;

    if(formValue.username === '' || formValue.password === '') {
      alert('Wrong Credentials');
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.service.doLogin(this.request).subscribe({
      next: (res) => {
        console.log("Received response:" + res.user);

        if(res.user === null){
          alert("Wrong username/password");
        }
        else{
          this.currentUser = res.user;
          if(this.currentUser !== undefined){
            //set and simulate current user
            this.userDataService.setCurrentUser(this.currentUser);
            this.authService.login()
            this.router.navigate(['/tasks'], { relativeTo: this.route });
          }
        }
        
      }, error: (err) => {
        console.log("Error: " + err);
      }
    });

  }



}
