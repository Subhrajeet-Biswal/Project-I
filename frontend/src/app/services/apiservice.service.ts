import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any',
})
export class ApiserviceService {
  apiurl = 'http://localhost:3000/users';
  
  constructor(private http: HttpClient) {}
  getAllUser(): Observable<any> {
    return this.http.get(`${this.apiurl}`);
  }
  postdata(data?: any): Observable<any> {
    return this.http.post(`${this.apiurl}`, data, { responseType: 'text' });
  }
  deletedata(id:any):Observable<any>{

    return this.http.delete(`${this.apiurl}/${id}`,{ responseType: 'text' });
  }
}
