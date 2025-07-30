import { Component, signal } from '@angular/core';
import { Rooms } from "./rooms/rooms";

@Component({
  selector: 'hinv-root',
  imports: [Rooms],
  templateUrl: './app.html',
  styleUrl: './app.css' //styleUrls: ['./app.component.scss] -> can have multiple inline styles
})
export class App {
  protected readonly title = signal('hotalinventoryapp');
  
  role = 'Admin';
}
