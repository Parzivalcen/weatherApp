import getData from "./getData";
import _mainPage from "../styles/sassModules/_mainPage.scss"

export default class weather{
  static searchLocation(){
    const container = document.createElement('div');
    container.classList.add('search-container');
    container.innerHTML = `
    <div class="search-container">
      <label for="search" class="search-label">Find your location</label>
        
      <input type="search" id="search" name="search">
      
      <button class="search-btn">search</button>
    </div>
    `
    return container;
  }
  static containerFill (weather){
    let innerHTML;
    console.log('code succes', weather.cod)
    if(weather.cod !== 200){
      return 'Somthing went wrong or city not found';
    }

      const temp = (weather.temperature - 273.15).toFixed(1);
      const tempFeel = (weather.feelsLike - 273.15).toFixed(1);
      let weatherIconClass = 'clouds';
      // TO change weather icons according to conditions
      if(weather.sky === 'Clouds')weatherIconClass = 'clouds'
      else if(weather.sky === 'Clear')weatherIconClass = 'clear'
      else if(weather.sky === 'Rain' || weather.sky=='Drizzle')weatherIconClass = 'rain'
      else if(weather.sky === 'Thunderstorm')weatherIconClass = 'thunderstorm'
      
      innerHTML = `
      <h2 class="city">${weather.cityName}, ${weather.country}</h2>
      <h2 class="temperature">${temp}°C - <span class="sky">${weather.sky}</span></h2>
      <i class="weather-icon ${weatherIconClass}"></i>
      <p class="sky-desc">${weather.skyDesc}</p>
      <p class="feeling">feels like ${tempFeel}°C</p>
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