import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Position } from '../position';
import { PositionService} from '../services/position.service';
import { NgForm, } from '@angular/forms';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {
  @ViewChild('employeeForm') employeeForm: NgForm;

  private position: Position;
  private project: Project;
  private positions: Position[] = [];
  private projects: Project[] = [];

  employee: Employee = {
    id: undefined,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: {
      positionId: undefined,
      jobTitle: ''
    },
    projects:
	[  
	  {
	        projectId: undefined,
	        projectName: '',
	        clientName: ''
	    }
  ]
    };


  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.getPositions();
    this.getProjects();
    this.employee=this.employeeService.getter();
    // this.position=this.positionService.getter();
    // this.project=this.projectService.getter();
   
  }

  processForm(){
    if(this.employee.id==undefined){
       this.employeeService.createEmployee(this.employee).subscribe((employee)=>{
         console.log(employee);
         this.router.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.employeeService.updateEmployee(this.employee).subscribe((employee)=>{
         console.log(employee);
         this.router.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
    console.log(this.employeeForm);
  }

  getPositions() {
    this.positionService.getAllPositions()
      .subscribe(data => {
        this.positions = data;
        console.log(this.position)
      })
  }

  getProjects() {
    this.projectService.getAllProjects()
      .subscribe(data => {
        this.projects = data;
        console.log(this.project)
      })
  }
}


