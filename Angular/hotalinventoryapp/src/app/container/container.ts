import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css'
  // providers: []
})


export class Container implements AfterContentInit {

  @ContentChild(Employee) employee !: Employee;

  ngAfterContentInit(): void {
    console.log(this.employee)
    this.employee.empName = 'Mike';
  }

}
