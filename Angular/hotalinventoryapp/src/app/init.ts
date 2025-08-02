import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class InitService {

  config: any;

  constructor(private http:HttpClient){}

  init() {
    return this.http
    // .get('C:/Users/sadat/OneDrive/Desktop/HTD_Training/Interview_Prep/Interview_Prep/Angular/hotalinventoryapp/src/app/assets/config.json')
    .get('src/app/assets/config.json')
    .pipe(tap((config) => (this.config = config)));
  }
  
}
