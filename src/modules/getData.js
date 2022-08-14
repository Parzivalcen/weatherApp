export default class data {
  static async getData (cityName) {
    const API_KEY = '18123aaa20b41be0c901f11c5f07d7d8'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    const data = await response.json();
    console.log(data);
    const weather = {
      'cityName':data.name,
      'country':data.sys.country,
      'temperature':data.main.temp,
      'feelsLike':data.main.feels_like,
      'sky':data.weather[0].main,
      'skyDesc':data.weather[0].description,
      'humidity':data.main.humidity,
      'windSpeed':data.wind.speed

    }
    console.log('weather', weather);
    return weather;
  }
} 