import { AfterViewChecked, AfterViewInit, Component, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './roomsinterface';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list";
import { Header } from "../header/header";
import { RoomsService } from './services/rooms';


@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsList, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms implements AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Garden Hotel';
  noOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookRooms: 5,
    totalRooms: 20,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(Header) headerComponent!: Header; //view only one instance

  @ViewChildren(Header) headerChildrenComponent!: QueryList<Header>; //view multiple instatnces

  // roomservice = new RoomsService();


  constructor(private roomsService: RoomsService) { }

  ngAfterViewChecked(): void {
    
  }

  ngAfterViewInit(): void {
    
    // console.log(this.headerComponent)
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Last Title";
  }


  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'AC, Fiber Wi-Fi, HDTV',
      price: 5000,
      photos: '',
      checkinTime: new Date('01-Jan-2023'),
      checkoutTime: new Date('01-Feb-2023'),
      rating: 8.5,
    };

    // this.roomList.push(room); //add new room to room list
    this.roomList = [...this.roomList, room]; //keep previous data and add new record
  }
}
