window.onload = function randomDogs() {
    const dogImageContainer = document.getElementById('dog__image__container');

    async function fetchAndDisplayImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            if (data.status === 'success') {
                const img = document.createElement('img');
                img.src = data.message;
                img.style.width = 'auto'; 
                img.style.height = '300px';
                dogImageContainer.appendChild(img);
            } else {
                console.log('Failed to fetch dog image');
            }
        } catch (error) {
            console.log('Error fetching dog image:', error);
        }
    }

    for (let i = 0; i < 10; i++) {
        fetchAndDisplayImage();
    }
};