import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private router:Router) { }
  currentCar:CarDetailsDto;
  ngOnInit(): void {
    
  }
 
  setCurrentCar(car:CarDetailsDto){
    this.currentCar = car;
  }
  getCurrentCarClass(car:CarDetailsDto){
    if(car == this.currentCar){
      return 'list-group-item active'
    }
    
    else{
      return 'list-group-item'
    }
  }
  getAllCarClass()
  {
    if(!this.currentCar){
      return 'list-group-item active'
    }
    else{
      return 'list-group-item'
    }
  }
}
