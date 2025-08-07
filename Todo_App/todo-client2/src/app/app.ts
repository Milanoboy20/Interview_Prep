import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { AuthService } from './guards/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-client2');

  constructor(private authService: AuthService){}

  // authService!: AuthService;

  // isLoggedIn?: boolean;

  getLoginStatus(): boolean {
    return this.authService.isLoggedInStatus();
  }

}
