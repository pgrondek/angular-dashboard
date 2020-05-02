import {Weather, WeatherTemperature} from '../model/weather';
import {Adapter} from '../../core/adapter';
import {Injectable} from '@angular/core';
import {WeatherIconAdapter} from './weather-icon-adapter';

@Injectable({
  providedIn: 'root'
})
export class WeatherAdapter implements Adapter<Weather> {
  constructor(private iconAdapter: WeatherIconAdapter) {
  }

  adapt(item: any): Weather {

    return new Weather(
      item.name,
      item.weather[0].main,
      this.iconAdapter.adapt(item.weather[0].icon),
      new WeatherTemperature(
        item.main.temp,
        item.main.temp_min,
        item.main.temp_max
      ),
      item.main.pressure,
      item.main.humidity,
      item.wind.speed
    );
  }

}
