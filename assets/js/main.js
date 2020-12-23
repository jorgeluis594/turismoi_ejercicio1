import { getApiDataByCity } from "./api-wrapper.js";
import observer from "./observer.js";
import Tour from "./tour.js";
import Screen from "./screen.js";

const observerApiData = observer();
const screen = Screen();

// transform api data to tour
function pipeDataToTours(cb) {
  return function (data) {
    const tours = data.map((tourData) => Tour(tourData));
    cb(tours);
  };
}

observerApiData.subscribe(screen.cleanScreen);
observerApiData.subscribe(pipeDataToTours(screen.addCards));

// listening changes
document.getElementById("cities").addEventListener("change", (e) => {
  getApiDataByCity(e.target.value).then((data) => {
    observerApiData.notify(data);
  });
});

// get data for first page
getApiDataByCity("pucallpa").then((data) => {
  observerApiData.notify(data);
});
