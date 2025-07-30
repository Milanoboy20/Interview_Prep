import { Component } from '@angular/core';
import { Room, RoomList } from './roomsinterface';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list";


@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsList],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms {

  hotelName = 'Hilton Garden Hotel';
  noOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookRooms: 5,
    totalRooms: 20,
  };

  roomList : RoomList[] = [];

  constructor(){}


  ngOnInit(): void {
    this.roomList = [
      {
      roomNumber:1,
    roomType: 'Deluxe Room',
    amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
    price: 500,
    photos: '',
    checkinTime: new Date('12-Dec-2022'),
    checkoutTime: new Date('30-Dec-2022'),
    rating: 4.5,
  },
  {
    roomNumber:2,
    roomType: 'Deluxe Room',
    amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
    price: 1000,
    photos: '',
    checkinTime: new Date('12-Dec-2022'),
    checkoutTime: new Date('30-Dec-2022'),
    rating: 3.4,
  },
  {
    roomNumber:3,
    roomType: 'Private Room',
    amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
    price: 1500,
    photos: '',
    checkinTime: new Date('12-Dec-2022'),
    checkoutTime: new Date('30-Dec-2022'),
    rating:5.8,
  }
    ]
  }


  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
