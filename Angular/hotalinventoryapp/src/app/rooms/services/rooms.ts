import { Injectable } from '@angular/core';
import { RoomList } from '../roomsinterface';

@Injectable({
  providedIn: 'root'
})


export class RoomsService {
  roomList :RoomList[] = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
        price: 500,
        photos: '',
        checkinTime: new Date('12-Dec-2022'),
        checkoutTime: new Date('30-Dec-2022'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
        price: 1000,
        photos: '',
        checkinTime: new Date('12-Dec-2022'),
        checkoutTime: new Date('30-Dec-2022'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Room',
        amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
        price: 1500,
        photos: '',
        checkinTime: new Date('12-Dec-2022'),
        checkoutTime: new Date('30-Dec-2022'),
        rating: 5.8,
      }
    ];

    constructor() {
      console.log('Rooms Service Initialized...');
    }


    getRooms() {
      return this.roomList;
    }
}
