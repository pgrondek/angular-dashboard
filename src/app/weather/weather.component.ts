import {Component, OnInit} from '@angular/core';
import {WeatherService} from './service/weather.service';
import {Weather} from './model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weather: Weather = null;

  constructor(
    private service: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.service.getWeather()
      .subscribe(weather => this.weather = weather);
  }

}
