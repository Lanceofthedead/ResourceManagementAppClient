import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   title = 'resource-management-app';

  navLinks = [
    {path: 'employee-list', label: 'Employees' },
    {path: 'position-list', label: 'Positions' },
    {path: 'project-list', label: 'Projects' }
  ]

   constructor(private router:Router){
     

   }

   ngOnInit(): void{
 
}

}
