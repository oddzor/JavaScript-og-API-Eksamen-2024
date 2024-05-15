import { dogFacts } from "./arrays.js";


function displayDog () { // Dog image population to HTML, retrieved from localStorage
  const imageUrl = localStorage.getItem("selectedDogImage");
  const displayedImage = document.getElementById("selected__dog__picture");
  if (displayedImage && imageUrl) {
    displayedImage.src = imageUrl;
  }
};

function dogName () {
const dogName = localStorage.getItem("selectedDogName");
const dogNameElement = document.getElementById("selected__dog__name");
dogNameElement.textContent = `Name: ${dogName}`;
}

function randomDogFact() {  // Random dog facts to populate to HTML 
  const randomIndex = Math.floor(Math.random() * dogFacts.length);
  const randomDogFact = dogFacts[randomIndex].fact;
document.getElementById("random__dog__information").textContent = randomDogFact;
}

function fetchBreedName (url) {  // Breed names retrieved from imgUrl, reversed, capitalized and then populate to HTML
const regex = /breeds\/([^\/]+)\//;
const match = url.match(regex);
if (match) {
    const reverseString = match[1].split("-");
    return reverseString.reverse().map(component => 
    component.charAt(0).toUpperCase() + component.slice(1)).join(" ");
}
return "Breed Not Found";
}

function displayBreedName () {
let dogImage = document.getElementById("selected__dog__picture");
let breed = fetchBreedName(dogImage.src)
let breedName = document.getElementById("selected__dog__breed");
breedName.textContent = `Breed: ${breed}`;
}


window.onload = function () {
displayDog();
randomDogFact();
displayBreedName();
dogName();
}


// Sources:

// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/#using-mathrandom-function
// https://regex101.com/r/h0Cohs/1
// https://stackoverflow.com/questions/50515834/extract-part-of-url-with-regex
// https://stackoverflow.com/questions/49360639/how-to-reverse-words-in-a-string-instead-of-reversing-the-whole-string