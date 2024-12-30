const motivationalQuotes = [
    "Keep going, you're doing great!",
    "Believe in yourself!",
    "You are capable of amazing things.",
    "Stay positive, work hard, make it happen.",
    "The best is yet to come.",
    "Dream it. Wish it. Do it.",
    "Success is not for the lazy.",
    "Be the energy you want to attract.",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you."
];

function getRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
}

function generateDogImages() {
    const numberOfImages = 3; // Number of images you want to display
    const dogImagesContainer = document.getElementById('dogImages');
    dogImagesContainer.innerHTML = ''; // Clear previous images

    const fetchPromises = [];
    
    for (let i = 0; i < numberOfImages; i++) {
        fetchPromises.push(fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.message;
                img.alt = 'Cute dog';
                dogImagesContainer.appendChild(img);
            })
            .catch(error => console.error('Error fetching dog image:', error))
        );
    }

    Promise.all(fetchPromises).then(() => {
        document.getElementById('motivationLine').innerText = getRandomMotivation();
    });
}

// Initially load dog images and a motivational quote
generateDogImages();
