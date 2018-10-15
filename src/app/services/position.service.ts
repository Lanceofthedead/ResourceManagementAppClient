import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Position } from '../position';

@Injectable({
  providedIn: 'root'
})

export class PositionService {

  
  private baseUrl: string = "http://localhost:8080/api/position";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  private position = new Position();

  constructor(private http: Http) { }

  getAllPositions(){
    return this.http.get(this.baseUrl + '/list', this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  getPosition(positionId: Number){
    return this.http.get(this.baseUrl + '/' +positionId, this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  createPosition(position: Position){
    return this.http.post(this.baseUrl + '/add/', JSON.stringify(position), this.options)
    .map((response: Response) => response.json()).catch(this.errorHandler);
  }

  updatePosition(position: Position){
    return this.http.put(this.baseUrl +"/update/" +position.positionId, position, this.options)
           .map(success => success.status)
           .catch(this.errorHandler);
  }

  deletePosition(positionId: Number){
    return this.http.delete(this.baseUrl+'/delete/'+positionId,this.options);
    // .map((response:Response)=>response.json())
    // .catch(this.errorHandler);
  }

  errorHandler (error: Response){
    return Observable.throw(error || 'Server error');
  }

  setter(position: Position){
    this.position = position;
  }

  getter(){
    return this.position;
  }

 

}
