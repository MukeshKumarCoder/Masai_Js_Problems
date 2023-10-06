let showMap = document.querySelector("iframe");
  let time = document.querySelector(".time");
  let currentTemp = document.querySelector(".currentTemp");
  let realfeel = document.querySelector(".realfeel");
  let weatherType = document.querySelector(".cloudy");
  let sunRise = document.querySelector(".sunRise");
  let sunset = document.querySelector(".sunset");
  let min = document.querySelector(".min");
  let max = document.querySelector(".max");
  let wind = document.querySelector(".wind");
  let windGusts = document.querySelector(".windGusts");
  let humidity = document.querySelector(".humidity");
  let pressure = document.querySelector(".pressure");
  let visibility = document.querySelector(".visibility");
  let City_name = document.querySelector(".City_name");
  let clouds = document.querySelector(".clouds");
  let myApiKey = "193c5e3856f953616446742f4def7abc";
  
  
  time.textContent = new Date().toLocaleTimeString()
  
  let fetchWeatherDetails = async () => {
    let city_name = document.getElementById("searchInput").value;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${myApiKey}`;

    showMap.src = `https://maps.google.com/maps?q=${city_name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  try {
    let res = await fetch(URL);
    let data = await res.json();

    showWeather(data);
    geteWeekDaysWeather()
    console.log(data);
  } catch (error) {
    console.log("Data Not Found", error);
  }
};

fetchWeatherDetails();

let showWeather = (data) => {
    // cloud.textContent = data.weather[0].icon
   currentTemp.textContent = `${(data?.main?.temp - 273.15).toFixed()} °C`;
   City_name.textContent = data.name
   realfeel.textContent = `RealFeel ${(data.main.feels_like - 273.15).toFixed()} °C`;
   weatherType.textContent = data.weather[0].main;
   sunRise.textContent = `Sunrise ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
   sunset.textContent = `Sunset ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
   min.textContent = `Min ${(data.main.temp_min - 273.15).toFixed()} °C`;
   max.textContent = `Max ${(data.main.temp_max - 273.15).toFixed()} °C`;
   wind.textContent = `Wind Speed ${data.wind.speed} km/h`;
   windGusts.textContent = `Wind Gusts Speed ${data.wind.gust} km/h`;
   humidity.textContent = `Humidity ${data.main.humidity} %`;
   pressure.textContent = `Pressure ${data.main.pressure} mb`;
   visibility.textContent = `Visibility ${(data.visibility)/1000} km`;
   clouds.textContent = `clouds ${data.clouds.all}`;

};


function geteWeekDaysWeather() {
  let city_name = document.getElementById("searchInput").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=193c5e3856f953616446742f4def7abc`
  )
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min: " +
          Number(data.list[i].main.temp_min - 273.15).toFixed() +
          "°C";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max: " +
          Number(data.list[i].main.temp_max - 273.15).toFixed() +
          "°C";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }

      console.log(data);
    })

    .catch((err) => console.log("error", err));
}
let d = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekdays[CheckDay(i)];
}