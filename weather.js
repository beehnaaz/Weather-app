function openTempreture(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = response.data.main.temp;
}

function search(event) {
  event.preventDefault();
  let keyApi = "97c2f6a3b34509ac62090edc5d18d949";
  let cityInput = document.querySelector("#inputCityname").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${keyApi}&units=metric`;

  axios.get(apiUrl).then(openTempreture);
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", search);
