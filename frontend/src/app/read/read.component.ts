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
    console.log("hii");
    this.api.getAllUser().subscribe( (res) => {
      console.log(res);
      this.userdata=res;
    });
  }
} 
