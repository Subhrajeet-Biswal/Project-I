import { Component, ViewChild,OnInit,AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { timeStamp } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RoomsComponent,HeaderComponent,RouterModule, RouterOutlet,FormsModule],
  // providers:[{ provide: HttpClient, useClass: HttpClient }],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'myhotelinventoryapp';
  users:any;
  name:any;

  @ViewChild("child_room") croom:RoomsComponent;
  constructor(){
    // this.users=userdata.getdatabyapi();
    // .subscribe((data)=>{
    //   // console.warn("data",data);
    // });
    
    this.croom=new RoomsComponent();
  }
  ngOnInit(): void {
    
  }
  
  userlogin(item:any)
  {
    console.log(item);
  }
  inc()
  {
    this.croom.counter++;
  }
  dec()
  {
    this.croom.counter--;
  }
  


}
