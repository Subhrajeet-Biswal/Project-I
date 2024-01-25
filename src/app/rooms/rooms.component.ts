import { Component, ViewChild } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterOutlet,RouterModule ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  // @ViewChild(HeaderComponent) headercomponent?: HeaderComponent;
  public counter:number=0;
  increment()
  {
    this.counter++;
  }
  decrement()
  {
    this.counter--;
  }
}
