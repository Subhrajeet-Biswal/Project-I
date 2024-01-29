import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css',
})
export class ReadComponent implements OnInit {
  constructor(private api: ApiserviceService) {}
  userdata:any;
  
  ngOnInit(): void {
    this.api.getAllUser().subscribe( (res) => {
      // console.log(res);
      this.userdata=res;
    });
  }

  deleteuser(id:any){
    console.log(id);
    this.api.deletedata(id).subscribe((res)=>{
      console.log(res);
    });
    this.userdata=this.userdata.filter((item:any)=>{
      return item.id!=id;
    })
  }
  updateUser(id:any){
    console.log('hii');
  }
} 
