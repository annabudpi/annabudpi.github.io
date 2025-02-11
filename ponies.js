document.addEventListener('DOMContentLoaded', () => {
    const ponyContainer = document.getElementById('ponyContainer');
    const ponyForm = document.getElementById('ponyForm');

    // Load ponies from local storage or fallback to default list
    let ponies = JSON.parse(localStorage.getItem('ponies')) || [
        {
            "name": "Moonlight Dancer",
            "breed": "Flutter",
            "color": "Blue & Silver",
            "image": "https://example.com/pony1.png"
        },
        {
            "name": "Golden Hooves",
            "breed": "Earth",
            "color": "Rose Gold",
            "image": "https://example.com/pony2.png"
        }
    ];

    function displayPonies() {
        ponyContainer.innerHTML = ''; // Clear before reloading
        ponies.forEach((pony, index) => {
            const ponyCard = document.createElement('div');
            ponyCard.classList.add('pony-card');
            ponyCard.innerHTML = `
                <img src="${pony.image}" alt="${pony.name}">
                <h3>${pony.name}</h3>
                <p>Breed: ${pony.breed}</p>
                <p>Color: ${pony.color}</p>
                <button onclick="deletePony(${index})">Remove</button>
            `;
            ponyContainer.appendChild(ponyCard);
        });
    }

    // Handle form submission
    ponyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.get
