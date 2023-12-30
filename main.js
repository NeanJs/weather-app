let API_KEY = "df34762e1cbf64fe3b78e61fc3525b8f";
let BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
let ICON_URL = "http://openweathermap.org/img/w/";

document
  ?.querySelector("#form")
  ?.addEventListener("submit", (e) => e.preventDefault());
const fetchByCity = () => {
  let city = document.querySelector(".city");
  let icon = document.querySelector("#icon");
  let search = document?.getElementById("search")?.value;
  let temperature = document.querySelector(".temperature");
  let feels = document.querySelector(".feels");
  let min = document.querySelector(".low");
  let max = document.querySelector(".high");
  let wind = document.querySelector(".wind");
  let pressure = document.querySelector(".pressure");
  fetch(BASE_URL + `q=${search}&appid=${API_KEY}`).then((res) => {
    if (!res.ok) {
      city.innerHTML = "City not found!";
      icon.setAttribute("src", "");
      temperature.innerHTML = "";
    } else {
      res.json().then((data) => {
        city.innerHTML = data.name;
        icon.setAttribute("src", ICON_URL + data.weather[0].icon + ".png");
        temperature.innerHTML = handleConversion(data.main.temp);
        feels.innerHTML =
          "Feels like " + handleConversion(data.main.feels_like);
        min.innerHTML = handleConversion(data.main.temp_min);
        max.innerHTML = handleConversion(data.main.temp_max);
        wind.innerHTML = data.wind.speed;
        pressure.innerHTML = data.main.pressure;
        console.log(data);
      });
    }
    search = "";
  });
};

const handleConversion = (temp) => {
  return (temp - 273.15).toFixed() + "℃";
};
