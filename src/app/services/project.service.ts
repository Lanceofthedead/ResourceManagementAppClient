import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { Project } from '../project';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl: string = "http://localhost:8080/api/project";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  private project = new Project();

  constructor(private http: Http) { }

  getAllProjects(){
    return this.http.get(this.baseUrl + '/list', this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  getProject(projectId: Number){
    return this.http.get(this.baseUrl + '/' +projectId, this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  createProject(project: Project){
    return this.http.post(this.baseUrl + '/add/', JSON.stringify(project), this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  updateProject(project: Project){
    return this.http.put(this.baseUrl +"/update/" +project.projectId, project, this.options)
           .map(success => success.status)
           .catch(this.errorHandler);
  }

  deleteProject(projectId: Number){
    return this.http.delete(this.baseUrl+'/delete/'+projectId,this.options);
    // .map((response:Response)=>response.json())
    // .catch(this.errorHandler);
  }

  errorHandler (error: Response){
    return Observable.throw(error || 'Server error');
  }

  setter(project: Project){
    this.project = project;
  }

  getter(){
    return this.project;
  }

}
