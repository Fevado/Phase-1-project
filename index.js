// Creating a variable for the API KEY and URL
//const apiKey= "4272e49c4a4cc211baf48675dc8d1cfe";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 require('dotenv').config()
const apiKey=process.env.API_KEY

// Selecting Elements for manipulating the DOM

const searchBox = document.querySelector("#search input")
const searchBtn = document.querySelector("#search button")
const condition = document.querySelector(".condition")
const comments = document.getElementById('comments')
const commentBtn = document.getElementById('btn')

// Getting the data from the API

 function checkWeather(city){
    fetch(apiUrl + city + `&appid=${apiKey}`)
    .then(response=>response.json())
    .then(data=>{

    // Adding the fetched data to the DOM

    document.querySelector(".city").textContent= data.name;
    document.querySelector(".temp").textContent= data.main.temp + "°C";
    document.querySelector(".humidity").textContent= data.main.humidity + "%";
    document.querySelector(".wind").textContent= data.wind.speed + "km/h";

    // Displaying the weather condition being experienced using images

   switch (true){
    case(data.weather[0].id >=200 && data.weather[0].id <300):
    return condition.src= "/images/rain.png";
    case(data.weather[0].id >=300 && data.weather[0].id <400):
    return condition.src= "/images/rain.png";
    case(data.weather[0].id >=500 && data.weather[0].id <600):
    return condition.src= "/images/rain.png";
    case(data.weather[0].id >=600 && data.weather[0].id <700):
    return condition.src= "/images/snow.png";
    case(data.weather[0].id >=700 && data.weather[0].id <800):
    return condition.src= "/images/mist.png";
    case(data.weather[0].id === 800):
    return condition.src= "/images/clear.png";
    case(data.weather[0].id >=801 && data.weather[0].id <805):
    return  condition.src= "/images/clouds.png";
    default:
     return condition.src="/images/unknown.webp"   
   }
})
// Displaying the weather condition
document.querySelector(".weather").style.display="block"
}

// Adding Event listeners 
searchBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    checkWeather(searchBox.value)
})

commentBtn.addEventListener("click",(event)=>{
event.preventDefault();
comments.value
alert('SUBMITTED SUCCESFULLY! Thank you for your feedback')
})
