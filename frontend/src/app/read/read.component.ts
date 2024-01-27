import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css',
})
export class ReadComponent implements OnInit {
  constructor(private api: ApiserviceService) {}
  userdata:any;
  ngOnInit(): void {
    this.api.getAllUser().subscribe((res?: any) => {
      // console.log(res);
      this.userdata=res;
    });
  }
}
