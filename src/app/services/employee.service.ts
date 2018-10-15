import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = "http://localhost:8080/api/employee";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  private employee = new Employee();

  constructor(private http: Http) { }

  getAllEmployees(){
    return this.http.get(this.baseUrl + '/list', this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  getEmployee(id: Number){
    return this.http.get(this.baseUrl + '/' +id, this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.baseUrl + '/add/', JSON.stringify(employee), this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  updateEmployee(employee: Employee){
    return this.http.put(this.baseUrl +"/update/" +employee.id, employee, this.options)
           .map(success => success.status)
           .catch(this.errorHandler);
  }

  deleteEmployee(id: Number){
    return this.http.delete(this.baseUrl+'/delete/'+id,this.options);
    // .map((response:Response)=>response.json())
    // .catch(this.errorHandler);
  }

  errorHandler (error: Response){
    return Observable.throw(error || 'Server error');
  }

  setter(employee: Employee){
    this.employee= employee;
  }

  getter(){
    return this.employee;
  }


}
