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

window.onload = function () {
  console.log("here");
  type(
    `In season one of Cobra Kai, thirty years after their rivalry, Johnny Lawrence
            and Daniel
            LaRusso are reintroduced as adults with conflicting paths. Johnny, struggling with his past, reopens the
            Cobra Kai dojo, while Daniel runs a successful business. Johnny's Cobra Kai students are initially bullied
            outcasts, but they eventually become arrogant and aggressive, embracing the "No Mercy" mantra. The season
            culminates in the All Valley Under-18 Karate Tournament, where Johnny and Daniel's students compete,
            reigniting their rivalry.`,
    document.getElementById("s1")
  );
};

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

function type(arc, cont) {
  let string = arc.split("");
  for (let i = 0; i < string.length; i++) {
    setTimeout(
      () => {
        cont.append(string[i]);
      },
      i * 50,
      string[i]
    );
  }
}
