import { Inject, Injectable, OnInit } from '@angular/core';
import { RoomList } from '../roomsinterface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RoomsList } from '../rooms-list/rooms-list';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RoomsService implements OnInit{
  roomList :RoomList[] = [
      // {
      //   roomNumber: 1,
      //   roomType: 'Deluxe Room',
      //   amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
      //   price: 500,
      //   photos: '',
      //   checkinTime: new Date('12-Dec-2022'),
      //   checkoutTime: new Date('30-Dec-2022'),
      //   rating: 4.5,
      // },
      // {
      //   roomNumber: 2,
      //   roomType: 'Deluxe Room',
      //   amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
      //   price: 1000,
      //   photos: '',
      //   checkinTime: new Date('12-Dec-2022'),
      //   checkoutTime: new Date('30-Dec-2022'),
      //   rating: 3.4,
      // },
      // {
      //   roomNumber: 3,
      //   roomType: 'Private Room',
      //   amenities: 'AC, Free Wi-Fi, HDTV, Kitchen, Bathroom',
      //   price: 1500,
      //   photos: '',
      //   checkinTime: new Date('12-Dec-2022'),
      //   checkoutTime: new Date('30-Dec-2022'),
      //   rating: 5.8,
      // }
    ];


  getRooms$: any;

    ngOnInit(){
      this.getRooms$ = this.http.get<RoomList[]>(this.roomsApiUrl).pipe(
      shareReplay(1)
    );
    }

    // constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, 
    // private http: HttpClient) {
    //   console.log(this.config.apiEndpoint);
    //   console.log('Rooms Service Initialized...');
    // }

    constructor(private http: HttpClient){}
    private roomsApiUrl = 'http://localhost/3000/api/rooms'; //need data/backend api 
    private testApiUrl = 'https://jsonplaceholder.typicode.com/posts';


    // headers = new HttpHeaders({ 'token': '1234' });

    //  getRooms$ = this.http.get<RoomList[]>(this.roomsApiUrl,{
    //   headers: this.headers,
    //  }).pipe(shareReplay(1));

    getRooms() {
      return this.http.get<RoomList[]>(this.roomsApiUrl);
    }

    getTestApi() {
      return this.http.get<Post[]>(this.testApiUrl);
    }

    addRoom(room: RoomList) {
      return this.http.post<RoomList[]>(this.roomsApiUrl, room);
    }

    editRoom(room: RoomList) {
      return this.http.put<RoomList[]>(`${this.roomsApiUrl}/${room.roomNumber}`, room);
    }

    deleteRoom(id: string) {
      return this.http.delete<RoomList[]>(`${this.roomsApiUrl}/${id}`);
    }

    getPhotos() {
      const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
        reportProgress: true,
      });

      return this.http.request(request);
    }


    
}

export interface Post {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

// export inter    
