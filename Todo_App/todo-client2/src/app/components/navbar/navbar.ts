import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../classes/user';
import { UserSessionDataService } from '../services/user-session-data-service';
import { AuthService } from '../../guards/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})


export class Navbar implements OnInit{


  currentUser: User = new User;

  constructor(private userDataService: UserSessionDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.currentUser = this.userDataService.getCurrentUser();
    if(this.currentUser === undefined || this.currentUser.user_id === 0){
      
    }
  }

  logOut() {
    this.authService.logout();
  }
}
