import { Component } from '@angular/core';
import { Room, RoomList } from './roomsinterface';


@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms {

  hotelName = 'Hilton Garden Hotel';
  noOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookRooms: 5,
    totalRooms: 20,
  };

  roomList : RoomList[] = [ 
    {
      roomNumber:1,
    roomType: 'Deluxe Room',
    amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
    price: 500,
    photos: '',
    checkinTime: new Date('12-Dec-2022'),
    checkoutTime: new Date('30-Dec-2022'),
  },
  {
    roomNumber:2,
    roomType: 'Deluxe Room',
    amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
    price: 1000,
    photos: '',
    checkinTime: new Date('12-Dec-2022'),
    checkoutTime: new Date('30-Dec-2022'),
  },
  {
    roomNumber:3,
    roomType: 'Private Room',
    amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
    price: 1500,
    photos: '',
    checkinTime: new Date('12-Dec-2022'),
    checkoutTime: new Date('30-Dec-2022'),
  }
];

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
