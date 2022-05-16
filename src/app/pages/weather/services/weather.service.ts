import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coord } from '@app/shared/models/cord.model';
import { WeatherData } from '@app/shared/models/weather.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_URL = environment.openWeather.url;



  constructor(private httpClient:HttpClient) { }

   public getWeatherByCityName(cityName:string):Observable<any>{

    return this.httpClient.get<any>(`${this.API_URL}weather?q=${cityName}&units=metric&APPID=${environment.openWeather.key}`)
   } 

    public getWeatherByCityCoord(long:number,lat:number):Observable<any>{
      return this.httpClient.get<any>(`${this.API_URL}weather?lat=${lat}&lon=${long}&units=metric&appid=${environment.openWeather.key}`)
    } 

    



}
