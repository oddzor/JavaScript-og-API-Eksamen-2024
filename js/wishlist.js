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

        if (user && user.favorites && user.favorites.length > 0) {   // Different event if no favorites.
            favorites = user.favorites;
            showFavoriteDogs(favorites);
        } else {
            document.getElementById('wishlist__container').textContent = 'No favorites found.';  // If else and error message to provide information.
        }
    } catch (error) {
        console.error(error);
        document.getElementById('wishlist__container').textContent = 'Failed to load favorites. Check console for more information.';
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
        image.alt = `Image of ${favorite.name}`;
        image.style.width = 'auto';
        image.style.height = '300px';

        const breed = document.createElement('p');
        breed.textContent = `Breed: ${favorite.breed}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove From Wishlist';
        removeButton.className = 'remove__favorite__button';

        removeButton.addEventListener('click', () => removeFavorite(index, favorites));

        favoriteElement.appendChild(image);
        favoriteElement.appendChild(name);
        favoriteElement.appendChild(breed);
        favoriteElement.appendChild(removeButton);

        favoritesContainer.appendChild(favoriteElement);
    });
    const sortByNameButton = document.getElementById("sort__byname__button");
    sortByNameButton.onclick = () => sortbyName(favorites);
}

