import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import path from 'path';
import { AvailableroomsComponent } from './rooms/availablerooms/availablerooms.component';
import { OccupiedroomsComponent } from './rooms/occupiedrooms/occupiedrooms.component';

export const routes: Routes = [
    {path: 'header', component:HeaderComponent},
    {
        path: 'rooms', component:RoomsComponent,
        children:[
            {path: 'available',component: AvailableroomsComponent},
            {path: 'occupied',component: OccupiedroomsComponent}
        ]
    },
];
