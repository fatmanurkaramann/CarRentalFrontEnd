import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailsDto } from '../models/carDetailsDto';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = "https://localhost:44355/api/cars/"
  constructor(private httpClient:HttpClient) { }
  getAllCarsWithDetails(){
    let newPath = this.apiUrl+"getallcarswithdetails"
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByBrandId(brandId:number){
    let newPath = this.apiUrl+"getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarDetails(carId:number){
    let newPath=this.apiUrl+"getcarbydetails?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}
