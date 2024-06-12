const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
    window.history.back();
});

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const showId = params.get('id');
    
    fetch(`https://api.tvmaze.com/shows/${showId}`)
        .then(response => response.json())
        .then(show => {
            const showDetails = document.getElementById('show-details');
            showDetails.innerHTML = `
                <img src="${show.image ? show.image.medium : ''}" alt="${show.name}">
                <h2>${show.name}</h2>
                <p>${show.summary}</p>
                <p><strong>Genres:</strong> ${show.genres.join(', ')}</p>
                <p><strong>Language:</strong> ${show.language}</p>
                <p><strong>Premiered:</strong> ${show.premiered}</p>
            `;
        })
        .catch(error => console.error('Error fetching the TV show details:', error));
});