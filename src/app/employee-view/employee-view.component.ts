import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  // private employee: Employee;
  // id: Number

  employee: Employee;
statusMessage: string;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) {
   }

  ngOnInit() {
    let id: Number = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(id)
    .subscribe((employeeData)=> this.employee = employeeData, 
    (error)=>
    {
      this.statusMessage = 'Problem with the service. Please try again';
      console.log(error)});



  }
}
