import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl="https://localhost:44355/api/customers/"
  constructor(private httpClient:HttpClient) { }

  getAllCustomers(){
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }
}
