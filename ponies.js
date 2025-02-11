fetch('ponies.json')
    .then(response => response.json())
    .then(ponies => {
        const container = document.querySelector('.pony-container');
        ponies.forEach(pony => {
            const ponyCard = document.createElement('div');
            ponyCard.classList.add('pony-card');
            ponyCard.innerHTML = `
                <img src="${pony.image}" alt="${pony.name}">
                <h3>${pony.name}</h3>
                <p>Breed: ${pony.breed}</p>
                <p>Color: ${pony.type}</p>
            `;
            container.appendChild(ponyCard);
        });
    })
    .catch(error => console.error('Error loading ponies:', error));
