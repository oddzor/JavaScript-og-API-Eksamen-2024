import { dogNames } from "./arrays.js";

// Initial fetching of randomized dog pictures.

window.onload = function randomDogs() { 
    const dogImageContainer = document.getElementById('dog__image__container');

    async function fetchAndDisplayImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            if (data.status === 'success') {
                const img = document.createElement('img'); // Creating elements instead of hardcoding HTML.
                img.src = data.message;
                img.style.width = 'auto'; 
                img.style.height = '300px';
                img.className = "dog__image__element";
                dogImageContainer.appendChild(img);
                img.addEventListener('click', function() {
                    localStorage.setItem('selectedDogImage', img.src);
                    const randomIndex = Math.floor(Math.random() * dogNames.length);
                    const selectedDogName = dogNames[randomIndex].name;
                    localStorage.setItem('selectedDogName', selectedDogName);
                    window.location.href = 'selected.html';
                });
            } else {
                console.log('Failed to fetch dog image');
            }
        } catch (error) {
            console.log('Error fetching dog image:', error);
        }
    }

    for (let i = 0; i < 25; i++) {  // For loop to request random dog picture 10 times.
        fetchAndDisplayImage();
    }
};

// Sources: 

// https://stackoverflow.com/questions/76149003/foreach-loop-in-js-is-only-selecting-one-image-from-my-gallery