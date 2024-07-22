# Phase-1-project
# My Weather App
This application  allows users to view in detail the current weather conditions of various cities on the globe. Users are able to evaluate what type of clothing to wear or whether to continue with their scheduled plans.

## Features
1. Allows users to enter the city name
2. Fetches data about the weather experienced by the city from an API
3. Displays the fetched data to the user
4. Allows the user to give feedback on their user experience

## Instructions

# Installation
 1. Clone the repository to your PC
 2. Open the index.html file on your browser

### View Weather Details
When the page loads the first item that will be on view is a blank input option and a search button that performs the submit command

### View Weather Condition (Loading The Weather App)
In order for one to view the weather condition:
   1. Inside the empty input option with the placeholder (ENTER CITY), input the name of the city you want
   2. Once done with the input, hover your pointer to the search button (⌕) click on it.

Upon doing the above the weather conditions for the specified city will load.   

### Weather Menu
Once the content loads up the user will be able to view the following;
   1. An image showing the current weather condition being experienced by the city:
        We determined the image to be viewed using the criteria "data.weather[0].id" as provided by the Openweather API we were using.
   2. An arithmetic value at the center indicating the current temperature of the city in degrees celcious
   3. The name of the city 
   4. An arithmetic value in percentage indicating the amount of water present in the atmosphere of the 
      city  (Humidity)
   5. An arithmetic value in kilometres per hour indicating the speed of wind experienced by the city.

   * The details above do not persist upon refreshing the page