import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../classes/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../classes/login-response';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  

  constructor(private http: HttpClient){}

  private base_URL = "http://localhost:8080/api/v1/login";

  doLogin(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.base_URL, request);
  }


}
