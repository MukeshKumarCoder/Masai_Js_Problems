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
  let container = document.querySelector(".container");


  time.textContent = new Date().toLocaleTimeString()

let fetchWeatherDetails = async () => {
    let myApiKey = "193c5e3856f953616446742f4def7abc";
    let city_name = document.getElementById("searchInput").value;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${myApiKey}`;

    showMap.src = `https://maps.google.com/maps?q=${city_name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  try {
    let res = await fetch(URL);
    let data = await res.json();

    showWeather(data);
    // console.log(data);
  } catch (error) {
    console.error("Data Not Found", error);
    alert("please enter valid city name")
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
   clouds.textContent = `clouds ${data.clouds.all}`

   container.style.opacity = "1"
   

};
