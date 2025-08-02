import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { Tasks } from "./components/tasks/tasks";
import { AddTask } from "./components/tasks/add-task/add-task";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks, AddTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-client');
}
