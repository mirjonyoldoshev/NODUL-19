document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => {
            const showList = document.getElementById('list');
            data.forEach(show => {
                const div = document.createElement('div');
                div.className = 'cards';
                div.innerHTML = `
                    <img src="${show.image ? show.image.medium : ''}" alt="${show.name}">
                    <h3>${show.name}</h3>
                    <p>${show.genres.join(', ')}</p>
                    <a href="../index2.html?id=${show.id}">Keyingi sahifa uchun click qiling! </a>
                `;
                showList.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching the TV shows:', error));
});