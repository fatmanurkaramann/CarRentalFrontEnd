import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private apiUrl = "https://localhost:44355/api/colors/"
  constructor(private httpClient:HttpClient) { }

  getAllColors(){
  let newPath= this.apiUrl+"getall"
  return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
}
