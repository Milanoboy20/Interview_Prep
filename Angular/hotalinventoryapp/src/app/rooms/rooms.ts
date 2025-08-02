import { AfterViewChecked, AfterViewInit, Component, OnDestroy, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './roomsinterface';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list";
import { Header } from "../header/header";
import { RoomsService } from './services/rooms';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomsList, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class Rooms implements AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Garden Hotel';
  noOfRooms = 10;
  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookRooms: 5,
    totalRooms: 20,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete(); // to complete the stream
    // observer.error('error'); //to address errors
  });

  @ViewChild(Header) headerComponent!: Header; //view only one instance

  @ViewChildren(Header) headerChildrenComponent!: QueryList<Header>; //view multiple instatnces

  // roomservice = new RoomsService();

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  //catcherror usecase
  // rooms$ = this.roomsService.getRooms$.pipe(
  //   catchError((err) => { 
  //     // console.log(err);
  //     this.error$.next(err.message);
  //     return of([]); 
  //   })
  // );

  // roomsCount$ = this.roomsService.getRooms$.pipe(
  //   map((room) => room.length)
  // )

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngAfterViewChecked(): void {
    
  }

  ngAfterViewInit(): void {
    
    // console.log(this.headerComponent)
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Last Title";
  }

  totalBytes = 0;

  ngOnInit(): void {
    // this.roomList = this.roomsService.getRooms();

    this.roomsService.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Successful!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    this.stream.subscribe( {
      next:(value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),

    } );
    this.stream.subscribe((data) => console.log(data));
    // this.roomsService.getRooms$.subscribe((rooms: RoomList[]) => {
    //   this.roomList = rooms;
    // });
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
      roomNumber: '',
      roomType: 'Deluxe Room',
      amenities: 'AC, Fiber Wi-Fi, HDTV',
      price: 5000,
      photos: '',
      checkinTime: new Date('01-Jan-2023'),
      checkoutTime: new Date('01-Feb-2023'),
      rating: 8.5,
    };

    // this.roomList.push(room); //add new room to room list
    // this.roomList = [...this.roomList, room]; //keep previous data and add new record
  
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }


  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'AC, Fiber Wi-Fi, HDTV',
      price: 5000,
      photos: '',
      checkinTime: new Date('01-Jan-2023'),
      checkoutTime: new Date('01-Feb-2023'),
      rating: 8.5,
    };

    this.roomsService.editRoom(room).subscribe((data) =>{
      this.roomList = data;
    });
  }


  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    })
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();//whenever this component gets destroyed, unsubscribe
    }
  }
}
