import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  private projects: Project[] = [];

  project: Project = {
    projectId: undefined,
    projectName: '',
    clientName: ''
  };
  
  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.project=this.projectService.getter();
  }

  processForm(){
    if(this.project.projectId==undefined){
       this.projectService.createProject(this.project).subscribe((project)=>{
         console.log(project);
         this.router.navigate(['/project-list']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.projectService.updateProject(this.project).subscribe((project)=>{
         console.log(project);
         this.router.navigate(['/project-list']);
       },(error)=>{
         console.log(error);
       });
    }

}
}