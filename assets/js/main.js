import { getApiDataByCity } from "./api-wrapper.js";
import observer from "./observer.js";

const observerApiData = observer();

observerApiData.subscribe(console.log);

getApiDataByCity("pucallpa").then((data) => {
  observerApiData.notify(data);
});
