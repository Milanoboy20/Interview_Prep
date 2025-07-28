import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from "./rooms/rooms";

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  styleUrl: './app.css' //styleUrls: ['./app.component.scss] -> can have multiple inline styles
})
export class App {
  protected readonly title = signal('hotalinventoryapp');
}
