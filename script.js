const apiKey ="bbdc1da08972ee0615c326b5729eb633";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bareilly";

async function checkweather(){
    const response = await fetch(apiurl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkweather();

document.querySelector(".city").innerHTML =data.name