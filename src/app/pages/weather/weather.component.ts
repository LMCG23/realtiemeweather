import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherData } from '@app/shared/models/weather.model';
import { Loader } from '@googlemaps/js-api-loader';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
   lat:number = 0;
   lng:number = 0;
  wheaterForm:any;
  wheatherbyCity:WeatherData = new WeatherData();
  filteredCitiesDropdown:Array<any> = []
  filteredCities:Array<any> = []
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {

    this.wheaterForm  = new FormGroup({
      city: new FormControl(null,[Validators.required]),
  
    })
    this.getLocation();
  }


  getWeatherData(){
    try{
      this.weatherService.getWeatherByCityName(this.wheaterForm.controls.city.value).subscribe(response =>{
          this.wheatherbyCity = response
        })  
    }catch(err){
      alert('Type a rigth city')
    }
 
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
         
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.weatherService.getWeatherByCityCoord(this.lng,this.lat).subscribe(response =>{
            this.wheatherbyCity = response
          })
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }



}
