import { Injectable } from '@angular/core';
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})


export class UserSessionDataService {
  
  private userData: User = new User;

  constructor() {}

  setCurrentUser(user: User) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser(){
    const user = localStorage.getItem('user');

    if(user !== null) {
      this.userData = JSON.parse(user);
    }
    return this.userData;
  }

  clearUserData() {
    this.userData = new User;
  }
}
