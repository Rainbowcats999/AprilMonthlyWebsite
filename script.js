const themesong = new Audio("themesong.mp4");
themesong.loop = true;

function playAudio() {
  themesong.play();
  console.log("hello");
}

function pauseAudio() {
  themesong.pause();
}

// Create a new Audio object for the hiss sound
const hiss = new Audio("hiss.mp3");

// Check if the audio file loads correctly
hiss.onerror = () => {
  console.error("Error loading the hiss sound!");
};

// Select the image element by its class
const cobraImg = document.querySelector(".cobralogo");

// Add an event listener for when the mouse enters the image (hover)
cobraImg.addEventListener("mouseenter", () => {
  hiss.currentTime = 0; // Restart the hiss sound from the beginning
  hiss.play().catch((error) => {
    // Handle any errors if the sound doesn't play
    console.error("Error playing the sound:", error);
  });
});
