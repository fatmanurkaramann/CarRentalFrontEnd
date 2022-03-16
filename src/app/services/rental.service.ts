import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailDto } from '../models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl="https://localhost:44355/api/rentals/"
  constructor(private httpClient:HttpClient) { }

  getAllRentalDetails()
  {
    let newPath=this.apiUrl+"getallrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }
}

