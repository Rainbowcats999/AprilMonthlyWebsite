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
  let url = window.location.toString().split("/");
  url = url[url.length - 1];
  console.log(url);
  let destination;
  switch (url) {
    case "season1.html":
      destination = "s1";
    case "season2.html":
      destination = "s2";
    case "season3.html":
      destination = "s3";
    case "season4.html":
      destination = "s4";
    case "season5.html":
      destination = "s5";
    case "season6.html":
      destination = "s6";
  }
  type(
    `Cobra Kai Season 1 follows Johnny Lawrence as he reopens the Cobra Kai dojo 33 years after the events of the 1984 All Valley Karate Tournament, reigniting his rivalry with Daniel LaRusso. Johnny's struggles with self-destruction and a desire for redemption are intertwined with his efforts to build a new generation of Cobra Kai students, including Miguel Diaz. Daniel, now a successful car dealership owner, is initially disturbed by the dojo's reopening and faces his own challenges as he navigates his family life and the resurgence of his old rivalry.`,
    document.getElementById(destination)
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
