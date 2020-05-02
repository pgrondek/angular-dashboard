export class Weather {
  constructor(
    public name: string,
    public description: string,
    public icon: string,
    public temperature: WeatherTemperature,
    public pressure: number,
    public humidity: number,
    public windSpeed: number
  ) {
  }

}

export class WeatherTemperature {
  constructor(
    public temperature: number,
    public min: number,
    public max: number
  ) {
  }

}
