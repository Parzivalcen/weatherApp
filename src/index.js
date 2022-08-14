import home from "./modules/home";
import getData from "./modules/getData";
import weather from "./modules/displayData";
const body = document.body;

const main = document.createElement('main');
body.appendChild(main);
main.appendChild(home.hero());

getData.getData('Asuncion');
weather.SearchLocation();
weather.showData();

