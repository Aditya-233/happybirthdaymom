function playBirthdaySong() {
    const audio = new Audio('birthday_song.mp3'); // Replace with your audio file
    audio.play();
    showConfetti();
}

function showConfetti() {
    const confettiDiv = document.getElementById('confetti');
    confettiDiv.style.display = 'block';
    for (let i = 0; i < 100; i++) {
        createConfettiPiece();
    }
}

function createConfettiPiece() {
    const confettiDiv = document.getElementById('confetti');
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    
    // Randomize horizontal position around the cake
    piece.style.left = (Math.random() * 50 + 25) + 'vw'; // Centered horizontally
    piece.style.top = Math.random() * -50 + 'px'; // Start above the viewport
    
    // Use the confetti image
    piece.style.backgroundImage = 'url("confetti.png")';
    piece.style.backgroundSize = 'cover';
    
    piece.style.animationDelay = Math.random() * 2 + 's';
    
    confettiDiv.appendChild(piece);
    
    // Remove the piece after animation completes
    piece.addEventListener('animationend', () => {
        piece.remove();
    });
}

let confettiInterval;

function playBirthdaySong() {
    const audio = new Audio('birthday_song.mp3'); // Replace with your audio file
    audio.play();
    showConfetti();

    // Clear previous intervals if any
    clearInterval(confettiInterval);
    
    // Create confetti pieces every 200ms
    confettiInterval = setInterval(() => {
        createConfettiPiece();
    }, 200);
    
    // Stop confetti when the song ends
    audio.addEventListener('ended', () => {
        clearInterval(confettiInterval);
        document.getElementById('confetti').style.display = 'none'; // Hide confetti
    });
}

function showConfetti() {
    const confettiDiv = document.getElementById('confetti');
    confettiDiv.style.display = 'block';
}

function createConfettiPiece() {
    const confettiDiv = document.getElementById('confetti');
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    // Randomize to determine where the confetti starts
    const startPosition = Math.random();

    if (startPosition < 0.33) {
        // Start from the top
        piece.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        piece.style.top = Math.random() * -50 + 'px'; // Above the viewport
        piece.style.animation = 'fallStraight 2s forwards'; // Animation for falling straight
    } else if (startPosition < 0.66) {
        // Start from the left side
        piece.style.left = Math.random() * -50 + 'px'; // Off-screen to the left
        piece.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        piece.style.animation = 'fallCircularLeft 2s forwards'; // Animation for circular path
    } else {
        // Start from the right side
        piece.style.left = '100vw'; // Off-screen to the right
        piece.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        piece.style.animation = 'fallCircularRight 2s forwards'; // Animation for circular path
    }

    // Use the confetti image
    piece.style.backgroundImage = 'url("confetti.png")'; // Ensure this path is correct
    piece.style.backgroundSize = 'cover';

    confettiDiv.appendChild(piece);
    
    // Remove the piece after animation completes
    piece.addEventListener('animationend', () => {
        piece.remove();
    });
}

piece.style.animation = 'fallStraight 4s forwards'; // For straight falling
piece.style.animation = 'fallCircularLeft 4s forwards'; // For circular left
piece.style.animation = 'fallCircularRight 4s forwards'; // For circular right






