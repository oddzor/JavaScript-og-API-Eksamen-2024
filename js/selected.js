import { dogFacts, dogNames } from "./arrays.js";


function displayDog () { // Dog image population to HTML, retrieved from localStorage
  const imageUrl = localStorage.getItem("selectedDogImage");
  const displayedImage = document.getElementById("selected__dog__picture");
  if (displayedImage && imageUrl) {
    displayedImage.src = imageUrl;
  }
};

function randomDogFact() {  // Random dog facts to populate to HTML 
  const randomIndex = Math.floor(Math.random() * dogFacts.length);
  const randomDogFact = dogFacts[randomIndex].fact;
document.getElementById("random__dog__information").textContent = randomDogFact;
}

function randomDogName() { // Random dog names to populate to HTML 
    const randomIndex = Math.floor(Math.random() * dogNames.length);
    const randomDogName = dogNames[randomIndex].name;
    document.getElementById("selected__dog__name").textContent = randomDogName;
}

function fetchBreedName (url) {  // Breed names retrieved from imgUrl to populate to HTML
const regex = /breeds\/([^\/]+)\//;
const match = url.match(regex);
return match ? match[1] : "Cant find breed";
}

function displayBreedName () {
let dogImage = document.getElementById("selected__dog__picture");
let breed = fetchBreedName(dogImage.src)
let breedName = document.getElementById("selected__dog__breed");
breedName.textContent = `Breed: ${breed.charAt(0).toUpperCase() + breed.slice(1)}`;
}


window.onload = function () {
displayDog();
randomDogFact();
randomDogName();
displayBreedName();
}


// Sources:

// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/#using-mathrandom-function
