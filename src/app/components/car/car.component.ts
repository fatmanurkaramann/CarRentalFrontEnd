import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  cars:CarDetailsDto[]=[];
  brands:Brand[]=[];
  isCompleted = false 
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getAllCarsByBrandId(params["brandId"])
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


}
