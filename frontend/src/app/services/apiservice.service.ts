import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ApiserviceService {
  apiurl="http://localhost:3300/users";

  constructor(private http: HttpClient) { }
  getAllUser():Observable<any>
  { 
    return this.http.get(`${this.apiurl}`);
  }
  
}
