import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Rooms } from './rooms/rooms';
import { Notfound } from './notfound/notfound';
import { RoomsBooking } from './rooms/rooms-booking/rooms-booking';
import { RoomsAdd } from './rooms/rooms-add/rooms-add';

export const routes: Routes = [
    { path: 'employee', component: Employee },
    { path: 'rooms', component: Rooms },
    { path: 'rooms/add', component: RoomsAdd},
    { path: 'rooms/:id', component: RoomsBooking },
    { path: '', redirectTo: '/rooms', pathMatch: 'full' },
    { path: '**', component: Notfound }
];
