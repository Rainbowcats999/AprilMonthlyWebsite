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
  let text;
  switch (url) {
    case "index.html":
      destination = "s0";
      text = `Are you ready to dive in?`;
      break;
    case "season1.html":
      destination = "s1";
      text = `Cobra Kai Season 1 follows Johnny Lawrence as he reopens the Cobra Kai dojo 33 years after the events of the 1984 All Valley Karate Tournament, reigniting his rivalry with Daniel LaRusso. Johnny's struggles with self-destruction and a desire for redemption are intertwined with his efforts to build a new generation of Cobra Kai students, including Miguel Diaz. Daniel, now a successful car dealership owner, is initially disturbed by the dojo's reopening and faces his own challenges as he navigates his family life and the resurgence of his old rivalry.`;
      break;
    case "season2.html":
      destination = "s2";
      text = `In the second season of Cobra Kai, Johnny Lawrence struggles to maintain control of his dojo after the All-Valley Karate Tournament, facing the return of Kreese and the establishment of Daniel LaRusso's Miyagi-Do dojo. Kreese's influence and Johnny's own emotional struggles lead to a conflict between them, culminating in Kreese's expulsion and Johnny's focus shifting towards teaching his students honor and mercy. Meanwhile, Daniel's Miyagi-Do dojo grows, attracting students, including Robby and Sam, who also develop a romantic interest in each other. The season culminates in a schoolwide brawl instigated by Tory and her conflict with Sam, highlighting the escalating rivalry between Cobra Kai and Miyagi-Do. `;
      break;
    case "season3.html":
      destination = "s3";
      text = `In Cobra Kai season 3, the fallout from the school brawl leads to Miguel's paralysis, Robby's fugitive status, and Kreese's takeover of Cobra Kai. Daniel and Johnny attempt to mend their rivalry, but Daniel's business struggles prompt him to return to Okinawa, where he reconnects with Kumiko and Chozen, while Johnny focuses on Miguel's recovery. Kreese, meanwhile, pushes Cobra Kai towards a more ruthless and violent path, leading to escalating tensions between the two dojos. `;
      break;
    case "season4.html":
      destination = "s4";
      text = `In "Cobra Kai" Season 4, Daniel LaRusso and Johnny Lawrence, despite their rivalry, unite their Miyagi-Do and Eagle Fang dojos to defeat Cobra Kai at the All Valley Tournament. However, Kreese, seeking victory, brings back Terry Silver, and the season culminates with Cobra Kai winning the tournament, though not entirely fairly, and several significant personal developments for the main characters. `;
      break;
    case "season5.html":
      destination = "s5";
      text = `In "Cobra Kai" Season 5, Silver's Cobra Kai expansion is underway, leading to conflicts with Daniel and Johnny's dojos. Johnny and Robby travel to Mexico to help Miguel find his biological father, leading to revelations about Miguel's past. The season also features the introduction of the Sekai Taikai, a global karate tournament, and culminates in Kreese's escape from prison. `;
      break;
    case "season6.html":
      destination = "s6";
      text = `Cobra Kai season 6, split into three parts, sees the combined Miyagi-Do and Eagle Fang dojos preparing for the Sekai Taikai, a world karate tournament, while facing old rivals and new challenges. Kreese returns to Korea after escaping prison and joins forces with a new Cobra Kai leader, Kim Da-Eun, while Terry Silver resurfaces, manipulating events from the shadows. Tory, facing a difficult personal situation, switches back to Cobra Kai, further complicating the situation for Miyagi-Do. The season culminates in a dramatic Sekai Taikai where internal rivalries and external threats are put to the test, culminating in unexpected outcomes and a bittersweet ending. `;
      break;
  }

  type(text, document.getElementById(destination));
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
