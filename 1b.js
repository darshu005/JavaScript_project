let input=prompt("Enter the number of cities separated by commas");
let cities=input.split(',').map(city=>city.trim());
console.log("Intial cities"+cities);
let lengthOfCity=console.log("Total number of cities:"+cities.length);
let newCity=prompt("Enter a new city:");
cities.push(newCity);
console.log("After adding an new city:"+cities);
console.log("Removing the first city:"+cities[0]);
cities.shift();
console.log("After removing the first city:"+cities);
let SearchCity=prompt("Enter a city");
let CityIndex=cities.indexOf(SearchCity);
console.log("Index of "+SearchCity+CityIndex!=-1?CityIndex:"not found");


