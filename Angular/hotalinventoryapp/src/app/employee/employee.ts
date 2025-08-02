import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
  // providers: [RoomsService]
})

export class Employee {

  empName: string = 'John';

  // constructor(@Self() private roomsService : RoomsService) {

  // }
}
