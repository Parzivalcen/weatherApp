import getData from "./getData";

export default class weather{
  constructor (city, country, temp, sky, tempFeel, wind){
    this.city = city;
    this.country = country;
    this.temp = temp;
    this.sky = sky;
    this.tempFeel = tempFeel;
    this.wind = wind;
  }
  static searchLocation(){
    const container = document.createElement('div');
    container.classList.add('search-container');
    container.innerHTML = `
    <div class="search-container">
      <label for="search">
        <span>Find your location</span>
        <input type="search" id="search" name="search">
      </label>
      <button class="search-btn">search</button>
    </div>
    `
    return container;
  }
  static containerFill (weather){
    const temp = (weather.temperature - 273.15).toFixed(1);
    const tempFeel = (weather.feelsLike - 273.15).toFixed(1);
    let weatherIconClass = '';
    // TO change weather icons according to conditions
    if(weather.sky === 'Clouds')weatherIconClass = 'clouds'
    else if(weather.sky === 'Clear')weatherIconClass = 'clear'
    else if(weather.sky === 'Rain' || weather.sky=='Drizzle')weatherIconClass = 'rain'
    else if(weather.sky === 'Thunderstorm')weatherIconClass = 'thunderstorm'

    const innerHTML = `
    <h2 class="city">${weather.cityName}, ${weather.country}</h2>
    <h2 class="temperature">${temp} - <span class="sky">${weather.sky}</span></h2>
    <i class="weather-icon ${weatherIconClass}"></i>
    <p class="sky-desc">${weather.skyDesc}</p>
    <p class="feeling">feels like ${tempFeel}</p>
    <p class="humidity">humidity ${weather.humidity}%</p>
    <p class="wind-speed">wind ${weather.windSpeed} m/s</p>
  `
  return innerHTML;
  }
  static dataContainer(weather){
    const container = document.createElement('div');
    container.classList.add('weather-container');
    container.innerHTML = this.containerFill(weather);
    return container;
  }
  static async showData (){
    // const searchBtn = document.querySelector('.search-btn');
    const hero = document.querySelector('.container--hero')
    const data = await getData.getData('asuncion');
    const dataHTML = this.dataContainer(data);
    hero.appendChild(dataHTML);
    return dataHTML;
  }
  static SearchLocation (){
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', async ()=>{
      const container = document.querySelector('.weather-container');
      // empty previous weather data.
      container.innerHTML = '';
      // search
      const searchValue = document.querySelector('#search').value;
      const data = await getData.getData(searchValue);
      container.innerHTML = this.containerFill(data); 
    })
  }
}