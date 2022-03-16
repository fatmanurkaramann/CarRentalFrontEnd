import { Component, OnInit } from '@angular/core';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetailsDto[]=[];
  isCompleted = false 
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getAllCarsWithDetails()
  }
  getAllCarsWithDetails(){
    this.carService.getAllCarsWithDetails().subscribe(response=>{
      this.cars = response.data;
      this.isCompleted = true;
    })
  }

}
