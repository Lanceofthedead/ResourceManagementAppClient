import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../position';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  private positions: Position[];

  constructor(private positionService: PositionService,
              private router: Router) { }

  ngOnInit() {
    this.positionService.getAllPositions().subscribe((positions)=>{
      console.log(positions);
      this.positions=positions;
    },(error)=>{
      console.log(error);
    })
  }

  deletePosition(position){
    this.positionService.deletePosition(position.positionId).subscribe((data)=>{
      this.positions.splice(this.positions.indexOf(position),1);
  },(error)=>{
    console.log(error);
  });
  }

  updatePosition(position){
    this.positionService.setter(position);
    this.router.navigate(['/position-form']);
  }

  newPosition(){
    let position = new Position();
    this.positionService.setter(position);
    this.router.navigate(['/position-form']);
  }

}
