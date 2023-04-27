function todaysDate(date) {
  let dates = date.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let currentDate = document.querySelector("#current-Date");
  currentDate.innerHTML = `${day}, ${month} ${dates}, ${year}`;
}
todaysDate();

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");
  let currentCity = document.querySelector("currentCity");
  currentCity.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let tempCitySearched = document.querySelector("CurrentTemperature");
  tempCitySearched.innerHTML = `${temperature}`;
}

let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);