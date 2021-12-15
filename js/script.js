console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

// Id node where the game starts
let startIndex = 0;

// function that starts the game
function startAdventure(textAdventureIndex) {
  console.log("Adventure has started");
  showAdventureOptions(textAdventureIndex);
}

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  // check fisrt

  const newDescriptionText = textAdventure.find(
    (gameNode) => gameNode.id === textAdventureID
  );
  if (!newDescriptionText.options) {
    // hide button
    document.getElementById("first_btn").style.display = "none";

    // show description
    descriptionText.innerHTML = newDescriptionText.message;

    document.getElementById("second_btn").innerHTML = "Play Again";
    return;
  }

  descriptionText.innerText = newDescriptionText.description;
  // iterate through the buttons and insert the option text in each button
  for (let i = 0; i < newDescriptionText.options.length; i++) {
    //console.log(newDescriptionText.options[i].buttontext);
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function
function buttonOptions() {
  const adventureIndex = textAdventure.find(
    (gameNode) => gameNode.id === startIndex
  );

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons.addEventListener("click", function () {});
  }
}

function onPlay() {
  let ids = textAdventure.map((item) => {
    return item.id;
  });

  if (startIndex > ids.length - 1) {
    startIndex = 0;
  }

  // show
  showAdventureOptions(ids[startIndex]);
}

function onNextOption(event) {
  event.preventDefault();

  startIndex++;

  onPlay();
}

function onPlayAgain(event) {
  event.preventDefault();

  // show button
  document.getElementById("first_btn").style.display = "inline";

  startIndex = 0;

  onPlay();
}

// optional: function that shows end of the game

// create and object that holds the text for our game and options and also tracks state
const textAdventure = [
  {
    id: 1,
    description:
      "This is the adventure of Rio, who got lost in the dark when searching for the asker. Rio needs your help to find her way out. Choose one of the options below",
    options: [
      {
        buttontext: "Head back to where you came from",
        setState: { headback: true },
        nexttext: 2,
      },
      {
        buttontext: "Look up at the sky and head towards the sun",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 2,
    description:
      "great, Rio was able to find her way back, but now she reliazes that its about to rain, what should Juan do now?",
    options: [
      {
        buttontext: "Look for shelter",
        setState: { headback: true },
        nexttext: 3,
      },
      {
        buttontext: "Continue heading back, and risk getting lost again",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 3,
    description:
      "Rio is safe in the shelter. She will wait until it stops raining. What should Rio do",
    options: [
      {
        buttontext: "Leave the shelter as soon as it stops raining",
        setState: { headback: true },
      },
      {
        buttontext: "Wait until the sun comes out again and continue walking",
        setState: { daylight: true },
        nexttext: 4,
      },
    ],
  },
  {
    id: 4,
    // message: console.log('Thank you for helping Rio!')
    message: "Thank you for helping Rio!",
  },
];

// get first index id
// let ids = textAdventure.map(item => {
//   return item.id;
// });

// let firstId = ids[startIndex];

// startAdventure(firstId);

onPlay();
