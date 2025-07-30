import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { Rooms } from "./rooms/rooms";
import { Container } from "./container/container";
import { Employee } from "./employee/employee";

@Component({
  selector: 'hinv-root',
  imports: [Rooms, Container, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css' //styleUrls: ['./app.component.scss] -> can have multiple inline styles
})
export class App implements OnInit{
 
  protected readonly title = signal('hotalinventoryapp');
  
  role = 'Admin';


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
