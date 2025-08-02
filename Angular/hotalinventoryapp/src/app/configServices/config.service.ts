import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    private apiUrl = 'http://localhost/3000';
    constructor(private http: HttpClient) {}


    getPost() {
        return this.http.get(this.apiUrl);
    }
}