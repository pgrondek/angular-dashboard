import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../model/weather';
import {map} from 'rxjs/operators';
import {WeatherAdapter} from './weather-adapter';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = environment.weather.url +
    '?id=' + environment.weather.cityId +
    '&units=' + environment.weather.units +
    '&appid=' + environment.weather.apiKey;

  constructor(private http: HttpClient, private adapter: WeatherAdapter) {
  }

  getWeather(): Observable<Weather> {
    return this.http.get<any>(this.apiUrl)
      .pipe(map((data) => this.adapter.adapt(data)))
      ;
  }
}
