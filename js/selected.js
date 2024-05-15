import { dogFacts } from "./arrays.js";

const mockBackend = "https://crudcrud.com/api/49b54a659c37444badaa69070d61b85a";

function displayDog() {
  // Dog image population to HTML, retrieved from localStorage
  const imageUrl = localStorage.getItem("selectedDogImage");
  const displayedImage = document.getElementById("selected__dog__picture");
  if (displayedImage && imageUrl) {
    displayedImage.src = imageUrl;
  }
}

function dogName() {
  const dogName = localStorage.getItem("selectedDogName");
  const dogNameElement = document.getElementById("selected__dog__name");
  dogNameElement.textContent = `Name: ${dogName}`;
}

function randomDogFact() {
  // Random dog facts to populate to HTML
  const randomIndex = Math.floor(Math.random() * dogFacts.length);
  const randomDogFact = dogFacts[randomIndex].fact;
  document.getElementById("random__dog__information").textContent =
    randomDogFact;
}

function fetchBreedName(url) {
  // Breed names retrieved from imgUrl, reversed, capitalized and then populate to HTML
  const regex = /breeds\/([^\/]+)\//;
  const match = url.match(regex);
  if (match) {
    const reverseString = match[1].split("-");
    return reverseString
      .reverse()
      .map(
        (component) => component.charAt(0).toUpperCase() + component.slice(1)
      )
      .join(" ");
  }
  return "Breed Not Found";
}

function displayBreedName() {
  let dogImage = document.getElementById("selected__dog__picture");
  let breed = fetchBreedName(dogImage.src);
  let breedName = document.getElementById("selected__dog__breed");
  breedName.textContent = `Breed: ${breed}`;
}

function addToWishlist() {
  const selectedDogImage = localStorage.getItem("selectedDogImage");
  const selectedDogName = localStorage.getItem("selectedDogName");
  const breedElement = document.getElementById("selected__dog__breed");
  const selectedDogBreed = breedElement
    ? breedElement.textContent.replace("Breed: ", "") // Removing "Breed:" to clean up stored object
    : "Unknown Breed"; 
  const userId = localStorage.getItem("userID");

  if (!userId) {
    console.error("No logged-in user found in localStorage.");
    alert("Please log in to add to wishlist."); // For use prior to registration/login
    return;
  }

  fetch(`${mockBackend}/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const favoriteDog = {
        image: selectedDogImage,
        name: selectedDogName,
        breed: selectedDogBreed,
      };

      if (!user.favorites) {
        user.favorites = []; // Ensuring array exists, redundancy for registration function.
      }

      user.favorites.push(favoriteDog);

      const simplifiedUser = {
        email: user.email,
        password: user.password,
        favorites: user.favorites,
      };

      return fetch(`${mockBackend}/users/${userId}`, {
        method: "PUT", // PUT to "update" information within userdata by adding dogs, chose this method due to possible limitations on subdirectories with crudcrud
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(simplifiedUser),
      });
    })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          console.error("Response text:", text);
          throw new Error("Network Error");
        });
      }
      if (response.status === 200 || response.status === 204) {
        return {};
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error adding to wishlist:", error);
    });
}

function logoutUser() {
  localStorage.clear(); 
  window.location.href = 'index.html';
}

document.getElementById("logout__button__selected").addEventListener("click", logoutUser);

window.onload = function () {  // Running necessary function on pageload.
  displayDog();
  randomDogFact();
  displayBreedName();
  dogName();

  document
    .getElementById("dog__wishlist__button")
    .addEventListener("click", addToWishlist);
};


document.getElementById("goto__wishlist__button").addEventListener("click", function goToWishlist() {
  window.location.href = 'wishlist.html';
} ); 
  


// Sources:

// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/#using-mathrandom-function
// https://regex101.com/r/h0Cohs/1
// https://stackoverflow.com/questions/50515834/extract-part-of-url-with-regex
// https://stackoverflow.com/questions/49360639/how-to-reverse-words-in-a-string-instead-of-reversing-the-whole-string
