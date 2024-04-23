/*
You can use this site to build and test fetch code

https://jsonplaceholder.typicode.com/

Here is the code for the Weather Bug API.  Do not use it more that 5,000 times or they may charge me $1.00.

Include this in the .js folder as JavaScript file weatherBug.js:
*/

function WeatherBug() {
    fetch('https://api.weatherapi.com/v1/current.json?key=3a4515825e3c433f8dc40901220203&q=London&aqi=no')
    .then((res) => res.json())
    .then((data) => {
        let timeArray = data.location.localtime.split(" ")
        let output = `<br /><div>
                         <br />
                           <div>
                            At ${timeArray[1]} on ${timeArray[0]} in ${data.location.name},
                    ${data.location.region}, the temperature is ${data.current.temp_f} F `
        if (data.current.wind_mph == 0) {
            output += `with no wind`
        }
        else {
            output += `with the wind from the ${data.current.wind_dir} at
                            ${data.current.wind_mph} mph`
        }
        output += `</div></div>
                      <br />
                      <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>
                      <br />Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>            `;
        document.getElementById('weather').innerHTML = output;
      });
    };
WeatherBug();