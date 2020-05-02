import {Adapter} from '../../core/adapter';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconAdapter implements Adapter<string> {
  map = {
    '01d': 'weather-sunny',
    '02d': 'weather-partly-cloudy',
    '03d': 'weather-cloudy',
    '04d': 'weather-cloudy',
    '09d': 'weather-pouring',
    '10d': 'weather-rainy',
    '11d': 'weather-lightning',
    '13d': 'weather-snow',
    '50d': 'weather-fog',

    '01n': 'weather-night',
    '02n': 'weather-night-partly-cloudy',
    '03n': 'weather-night-cloudy',
    '04n': 'weather-night-cloudy',
    '09n': 'weather-pouring',
    '10n': 'weather-rainy',
    '11n': 'weather-lightning',
    '13n': 'weather-snow',
    '50n': 'weather-fog'
  };

  adapt(item: any): string {
    let icon = this.map[item];
    if (icon == null) {
      icon = 'alert';
    }
    return icon;
  }
}
