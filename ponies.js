document.addEventListener('DOMContentLoaded', () => {
    const ponyContainer = document.getElementById('ponyContainer');
    const ponyForm = document.getElementById('ponyForm');
    const ponyName = document.getElementById('ponyName');
    const ponyBreed = document.getElementById('ponyBreed');
    const ponyColor = document.getElementById('ponyColor');
    const ponyImage = document.getElementById('ponyImage');

    // Load ponies from local storage or set an empty array
    let ponies = JSON.parse(localStorage.getItem('ponies')) || [];

    function displayPonies() {
        ponyContainer.innerHTML = ''; // Clear before reloading
        ponies.forEach((pony, index) => {
            const ponyCard = document.createElement('div');
            ponyCard.classList.add('pony-card');
            ponyCard.innerHTML = `
                <img src="${pony.image}" alt="${pony.name}">
                <h3>${pony.name}</h3>
                <p><strong>Breed:</strong> ${pony.breed}</p>
                <p><strong>Color:</strong> ${pony.color}</p>
                <button onclick="deletePony(${index})">Remove</button>
            `;
            ponyContainer.appendChild(ponyCard);
        });
    }

    // Handle form submission
    ponyForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page refresh

        const name = ponyName.value.trim();
        const breed = ponyBreed.value.trim();
        const color = ponyColor.value.trim();
        const image = ponyImage.value.trim();

        if (name && breed && color && image) {
            ponies.push({ name, breed, color, image });
            localStorage.setItem('ponies', JSON.stringify(ponies)); // Save to local storage
            displayPonies(); // Refresh the display
            ponyForm.reset(); // Clear the form
        } else {
            alert("Please fill in all fields!");
        }
    });

    // Function to delete a pony
    window.deletePony = function(index) {
        ponies.splice(index, 1);
        localStorage.setItem('ponies', JSON.stringify(ponies)); // Update storage
        displayPonies(); // Refresh display
    };

    displayPonies(); // Load ponies on page load
});
