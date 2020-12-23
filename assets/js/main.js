import { getApiDataByCity } from "./api-wrapper.js";
getApiDataByCity("lima").then((data) => {
  console.log(data);
});
