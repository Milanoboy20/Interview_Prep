import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();


  constructor() {
    const loginStatus = localStorage.getItem('isLoggedIn');

    if(loginStatus === 'true'){
      this.isLoggedIn.next(true);
    }
  }

  login() {
    this.isLoggedIn.next(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('isLoggedIn');

    //remove user item also
    localStorage.removeItem('user');
  }

  isLoggedInStatus(): boolean {
    return this.isLoggedIn.getValue();
  }
}
