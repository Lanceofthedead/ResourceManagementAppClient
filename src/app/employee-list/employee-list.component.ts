import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService} from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router ) { 

              
              }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((employees)=>{
      console.log(employees);
      this.employees=employees;
    },(error)=>{
      console.log(error);
    })
    // this.fetchData();

  }

  deleteEmployee(employee){
    this.employeeService.deleteEmployee(employee.id).subscribe((data)=>{
        this.employees.splice(this.employees.indexOf(employee),1);
        // this.employees = [];
        // this.fetchData();
    },(error)=>{
      console.log(error);
    });
  
  }

// update these as '/form'
  updateEmployee(employee){
    this.employeeService.setter(employee);
    this.router.navigate(['/employee-form']);
  }
  newEmployee(){
    let employee = new Employee();
    this.employeeService.setter(employee);
    this.router.navigate(['/employee-form']);
  }



  viewEmployee(employee){
    this.router.navigate(['/employee-view/',employee.id]);
  }


//   fetchData() {
//     this.employeeService.getAllEmployees().subscribe(data =>{
//         this.employees = data;
//     });
// }
}
