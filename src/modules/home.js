import weather from "./displayData";

export default class home {
  static hero(){
    const hero = document.createElement('div');
    hero.classList.add('container', 'container--hero');
    const searchBar = weather.searchLocation();
    hero.appendChild(searchBar);
    return hero;
  }
}