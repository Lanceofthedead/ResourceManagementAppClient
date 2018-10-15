import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  private projects: Project[];

  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((projects)=>{
      console.log(projects);
      this.projects=projects;
    },(error)=>{
      console.log(error);
    })
  }

  deleteProject(project){
    this.projectService.deleteProject(project.projectId).subscribe((data)=>{
        this.projects.splice(this.projects.indexOf(project),1);
    },(error)=>{
      console.log(error);
    });
  }

  updateProject(project){
    this.projectService.setter(project);
    this.router.navigate(['/project-form']);
  }
  newProject(){
    let project = new Project();
    this.projectService.setter(project);
    this.router.navigate(['/project-form']);
  }

}
