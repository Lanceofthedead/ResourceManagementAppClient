import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Position } from '../position';
import { PositionService} from '../services/position.service';


@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css']
})
export class PositionFormComponent implements OnInit {

  
  private positions: Position[] = [];

  position: Position = {
    positionId: undefined,
    jobTitle: ''
  };

  constructor(private positionService: PositionService,
              private router: Router) { }

  ngOnInit() {
  this.position=this.positionService.getter();
  }

  processForm(){
    if(this.position.positionId==undefined){
       this.positionService.createPosition(this.position).subscribe((position)=>{
         console.log(position);
         this.router.navigate(['/position-list']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.positionService.updatePosition(this.position).subscribe((position)=>{
         console.log(position);
         this.router.navigate(['/position-list']);
       },(error)=>{
         console.log(error);
       });
    }
 
  }
  
}
