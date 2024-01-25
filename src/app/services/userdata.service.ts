import { Inject, Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'any'//root'
})
export class UserdataService {
  
  constructor(private http:HttpClient) { }
  // http=Inject(HttpClient);
  
  getdatabyapi()
  {
    this.http.get('https://api.publicapis.org/entries').subscribe((data?:any)=>{
      console.warn("data",data);
    }); 
  }
  
}
