import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { DateFormatPipe } from './pipes/dateformat.pipe';
import { CustomerComponent } from './components/customer/customer.component';
import { TodoComponent } from './components/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavbarComponent,
    ColorComponent,
    BrandComponent,
    RentalComponent,
    DateFormatPipe,
    CustomerComponent,
    TodoComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
