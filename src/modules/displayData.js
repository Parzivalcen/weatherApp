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
  static containerFill (weather, temp, tempFeel){
    const innerHTML = `
    <h2 class="city">${weather.cityName}, ${weather.country}</h2>
    <h2 class="temperature">${temp} - <span class="sky">${weather.sky}</span></h2>
    <p class="feeling">Feels like ${tempFeel}</p>
    <p class="wind-speed">wind ${weather.windSpeed} m/s</p>
  `
  return innerHTML;
  }
  static dataContainer(weather){
    const container = document.createElement('div');
    container.classList.add('weather-container');
    const temp = 30;
    const tempFeel = 35;
    container.innerHTML = this.containerFill(weather, temp, tempFeel);
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
      // pass kelvin to C.
      container.innerHTML = this.containerFill(data, 30, 35);
    })
  }
}