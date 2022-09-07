const country = "Finland";
const continent = "Europe";
let population = 6;
const isIsland = false;
let language;

console.log("Country: " + country + " / " + "Continent: " + continent + " " + population);

console.log(" Types: " + " isIsland " + (typeof isIsland) + " population " + (typeof population) + " country " + (typeof country) + " language " + (typeof language))

console.log(population / 2)
console.log(population < 6)

language = "Finnish"

description = country + " is in " + continent + " and its " + population + " million people speak " + language

console.log(description)

// Cannot change value of a constant
// isIsland = true;