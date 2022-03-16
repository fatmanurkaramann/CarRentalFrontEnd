import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = "https://localhost:44355/api/brands/"
  constructor(private httpClient:HttpClient) { }

  getAllBrands(){
  let newPath= this.apiUrl+"getall"
  return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }
}