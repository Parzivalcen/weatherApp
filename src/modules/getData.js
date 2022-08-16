export default class data {
  static async getData (cityName) {
    const url = `https://parzival-weather-api-server.herokuapp.com/api?q=${cityName}`
    const response = await fetch(url,{
      mode:'cors'
    })
    const data = await response.json();
    if(data.cod !== 200){
      console.log('error', data);
      return data;
    }
    console.log(data);
    const weather = {
    'cityName':data.name,
    'country':data.sys.country,
    'temperature':data.main.temp,
    'feelsLike':data.main.feels_like,
    'sky':data.weather[0].main,
    'skyDesc':data.weather[0].description,
    'humidity':data.main.humidity,
    'windSpeed':data.wind.speed,
    'time':data.dt,
    'timeZone':data.timezone,
    'cod':data.cod
    
  }
  console.log('weather', weather);
  return weather;

  }
} 