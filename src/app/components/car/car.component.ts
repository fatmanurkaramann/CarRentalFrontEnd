import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetailsDto[];
  brands:Brand[]=[];
  currentCar:CarDetailsDto;
  isCompleted = false 
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getAllCarsByBrandId(params["brandId"])
      }
      else{
        this.getAllCarsWithDetails();
      }
      if(params["carId"]){
        this.getCarDetails(params["carId"])

      }
      else{
        this.getAllCarsWithDetails();
      }
    })
  }
  getAllCarsWithDetails(){
    this.carService.getAllCarsWithDetails().subscribe(response=>{
      this.cars = response.data;
      this.isCompleted = true;
      console.log(this.cars)
    })
  }
  getAllCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars = response.data
      this.isCompleted=true
      console.log(this.cars)
    })
  }
  getCarDetails(carId:number){
    this.carService.getCarsByBrandId(carId).subscribe(response=>{
      this.cars = response.data
      this.isCompleted=true
      console.log(this.cars)
    })
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
