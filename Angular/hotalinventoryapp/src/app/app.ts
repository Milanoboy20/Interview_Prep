import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { Rooms } from "./rooms/rooms";
import { Container } from "./container/container";
import { Employee } from "./employee/employee";
import { PostList } from "./post-list/post-list";
import { InitService } from './init';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'hinv-root',
  imports: [Rooms, Employee, PostList, Container, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css' //styleUrls: ['./app.component.scss] -> can have multiple inline styles
})
export class App implements OnInit{
 
  protected readonly title = signal('hotalinventoryapp');
  
  role = 'Admin';

  constructor(private initService: InitService) {
    console.log('Init Service: ' + initService.config);
  }

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotels";
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  //  ngAfterViewInit(): void {
  //   // throw new Error('Method not implemented.');
  //   const componentRef = this.vcr.createComponent(Rooms);
  //   componentRef.instance.noOfRooms = 50;
  // }

}
