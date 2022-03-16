import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  isCompleted:boolean=false
  rentals:RentalDetailDto[]
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getAllRentalDetails();
  }
  getAllRentalDetails(){
    this.rentalService.getAllRentalDetails().subscribe(response=>{
      this.rentals=response.data
      this.isCompleted=true
    })
  }
}
