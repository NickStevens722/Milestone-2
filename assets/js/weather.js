const weatherCountries = {
   'maldives': {
      lat: 3,
      long: 73
   },
   'rhodes': {
      lat: 36,
      long: 28,
   },
   'lisbon': {
      lat: 39,
      long: 9
   },
   'marrakesh': {
      lat: 31,
      long: 8,
   }
}

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const appId = "30d97b87215b9e9e7b0c5a065f302d8d";

const getData = () => {
   const xhr = new XMLHttpRequest();
   for (const country in weatherCountries) {
      console.log(country);
      const url = `${baseUrl}?lat=${weatherCountries[country].lat}&lon=${weatherCountries[country].long}&APPID=${appId}`
      xhr.open("GET", url);
      xhr.send();

      xhr.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            conditions = response.weather[0].main;
            temperature = response.main.temp - 273.15;
            temperature = Math.round(temperature);
            document.getElementById(country).innerHTML = `<h5>Current Weather</h5>
               <table>
                  <tr><th>Conditions:</th><th>Temperature:</th></tr>
                  <tr><td>${conditions}</td><td>${temperature}</td></tr>
               </table>`;
         }
      };
   }
}

getData()

// function getData(cb) {
//    var xhr = new XMLHttpRequest();

//    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=3&lon=73&APPID=30d97b87215b9e9e7b0c5a065f302d8d");
//    xhr.send();

//    xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//          cb(JSON.parse(this.responseText));
//       }
//    };
// };

// var temperature
// var conditions

// getData(function (data) {
//    conditions = data.weather[0].main;
//    temperature = data.main.temp - 273.15;
//    temperature = Math.round(temperature);
//    document.getElementById("data").innerHTML = `<h5>Current Weather</h5><table><tr><th>Conditions:</th><th>Temperature:</th></tr>
//    <tr><td>${conditions}</td><td>${temperature}</td></tr></table>`
// });

// function getData2(cb) {
//    var xhr = new XMLHttpRequest();

//    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=36&lon=28&APPID=30d97b87215b9e9e7b0c5a065f302d8d");
//    xhr.send();

//    xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//          cb(JSON.parse(this.responseText));
//       }
//    };
// };
// var temperatureRhodes
// var conditionsRhodes

// getData2(function (dataRhodes) {
//    conditionsRhodes = dataRhodes.weather[0].main;
//    temperatureRhodes = dataRhodes.main.temp - 273.15;
//    temperatureRhodes = Math.round(temperatureRhodes);
//    document.getElementById("data-rhodes").innerHTML = `<h5>Current Weather</h5><table><tr><th>Conditions:</th><th>Temperature:</th></tr>
//    <tr><td>${conditionsRhodes}</td><td>${temperatureRhodes}</td></tr></table>`
// });

