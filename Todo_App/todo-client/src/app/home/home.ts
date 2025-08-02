import { Component } from '@angular/core';
import { Tasks } from "../components/tasks/tasks";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homeMessage:string = 'Hello and Welcome!';
}
