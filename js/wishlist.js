let favorites = [];

async function getFavoriteDogs() {
    const userId = localStorage.getItem('userID'); // Retrieving userID again to target to GET request.
    const apiUrl = `https://crudcrud.com/api/49b54a659c37444badaa69070d61b85a/users/${userId}`; // Template literal for targeting.
   
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error Code: ${response.status}`);
        }
        const user = await response.json();

        if (user && user.favorites && user.favorites.length > 0) {   // If favorites are added, run function to display.
            favorites = user.favorites;
            showFavoriteDogs(favorites);
        } else {
            document.getElementById('wishlist__container').textContent = 'No favorites found.';  // If no favorites are added.
        }
    } catch (error) {
        console.error(error);
        document.getElementById('wishlist__container').textContent = 'Failed to load favorites. Check console for more information.';  // Error catching for "other errors"
    }
}

function showFavoriteDogs(favorites) {
    const favoritesContainer = document.getElementById('wishlist__container');
    favoritesContainer.innerHTML = '';
    favorites.forEach((favorite, index) => {
        const favoriteElement = document.createElement('div');  // For loop to create and display all favorites in separate elements.
        favoriteElement.className = 'favorite-item';

        const name = document.createElement('h3');
        name.textContent = favorite.name;

        const image = document.createElement('img');
        image.src = favorite.image;
        image.alt = `Image of ${favorite.name}`; // Creation of HTML to display
        image.style.width = 'auto';
        image.style.height = '300px';

        const breed = document.createElement('p');
        breed.textContent = `Breed: ${favorite.breed}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove From Wishlist';
        removeButton.className = 'remove__favorite__button';

        removeButton.addEventListener('click', () => removeFavorite(index, favorites));

        favoriteElement.appendChild(image);
        favoriteElement.appendChild(name); // Order of elements
        favoriteElement.appendChild(breed);
        favoriteElement.appendChild(removeButton);

        favoritesContainer.appendChild(favoriteElement);
    });
    const sortByNameButton = document.getElementById("sort__byname__button");
    sortByNameButton.onclick = () => sortbyName(favorites);
}

function removeFavorite(index, favorites) {

    const userId = localStorage.getItem('userID');
    const apiUrl = `https://crudcrud.com/api/49b54a659c37444badaa69070d61b85a/users/${userId}`;

    let updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);  // Remove the favorite

    fetch(apiUrl, {  // PUT request to update data in backend as subdirectories was not allowed.
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ favorites: updatedFavorites })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.status === 200 || response.status === 204) { 
          return {}; // Avoiding error message because response body is empty.
        }
        return response.json();
    })
    .then(() => {
        showFavoriteDogs(updatedFavorites);
    })
    .catch(error => {
        console.error(error);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.getElementById('delete__account__button');

    deleteButton.addEventListener('click', function(event) {
        event.preventDefault();
        const userId = localStorage.getItem('userID');

        if (userId) {
            const apiUrl = `https://crudcrud.com/api/49b54a659c37444badaa69070d61b85a/users/${userId}`;
            fetch(apiUrl, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete the account');
                }
                localStorage.clear(); 
                alert('Your account has been successfully deleted.'); // Account deletion to delete index in backend and completely clear localStorage
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert('No user logged in or user ID not found.');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    getFavoriteDogs();
    const sortByNameButton = document.getElementById("sort__byname__button");
    sortByNameButton.addEventListener("click", () => {
        sortbyName(favorites);
    });
});

function sortbyName (favorites) {
    favorites.sort((a, b) => a.name.localeCompare(b.name));
    showFavoriteDogs(favorites);
}

function logoutUser() {
    localStorage.clear(); 
    window.location.href = 'index.html';
  }
  document.getElementById("logout__button__wishlist").addEventListener("click", logoutUser);


window.onload = function () { 
    getFavoriteDogs();
}