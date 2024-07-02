const apiKey ="bbdc1da08972ee0615c326b5729eb633";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon")

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main== "Clouds"){
    weathericon.src = "cloudy.png";
}
else if(data.weather[0].main=="Clear"){
    weathericon.src = "sun.png";
}
else if(data.weather[0].main=="Rain"){
    weathericon.src = "rain.png";
}
else if(data.weather[0].main=="Humidity"){
    weathericon.src = "humid.png";
}
else if(data.weather[0].main=="Drizzle"){
    weathericon.src = "drizzle.png";
}
else if(data.weather[0].main=="Snow"){
    weathericon.src = "snow.png";
}
document.querySelector(".weather").style.display ="block";


}

searchbtn.addEventListener("click" , ()=>{
    checkweather(search.value);
})

