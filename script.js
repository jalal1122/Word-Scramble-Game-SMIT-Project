// Easy words Dictionary
const EasyWords = [
  "apple",
  "ball",
  "cat",
  "dog",
  "fish",
  "hat",
  "pen",
  "tree",
  "milk",
  "rain",
  "moon",
  "star",
  "book",
  "chair",
  "table",
  "glass",
  "clock",
  "spoon",
  "plate",
  "water",
  "house",
  "door",
  "window",
  "light",
  "flower",
  "grass",
  "road",
  "river",
  "cloud",
  "stone",
  "sun",
  "wind",
  "snow",
  "toy",
  "train",
  "boat",
  "car",
  "bus",
  "plane",
  "bird",
  "hand",
  "foot",
  "eye",
  "ear",
  "face",
  "smile",
  "happy",
  "sad",
  "run",
  "jump",
  "walk",
  "sit",
  "stand",
  "read",
  "write",
  "draw",
  "paint",
  "play",
  "sing",
  "dance",
  "eat",
  "drink",
  "sleep",
  "wake",
  "bath",
  "soap",
  "comb",
  "brush",
  "shoe",
  "sock",
  "bag",
  "shirt",
  "dress",
  "pants",
  "cap",
  "jacket",
  "button",
  "pillow",
  "blanket",
  "bed",
  "friend",
  "family",
  "mother",
  "father",
  "sister",
  "brother",
  "baby",
  "child",
  "teacher",
  "school",
  "book",
  "paper",
  "pen",
  "desk",
  "board",
  "bell",
  "park",
  "garden",
  "beach",
  "market",
];

// Medium words Dictionary
const MediumWords = [
  "planet",
  "pencil",
  "bottle",
  "rocket",
  "mirror",
  "garden",
  "silver",
  "blanket",
  "pocket",
  "painter",
  "candle",
  "fridge",
  "market",
  "bridge",
  "ticket",
  "tunnel",
  "library",
  "cabinet",
  "furnace",
  "guitar",
  "painter",
  "printer",
  "battery",
  "charger",
  "machine",
  "curtain",
  "chimney",
  "elephant",
  "giraffe",
  "tiger",
  "butterfly",
  "penguin",
  "dolphin",
  "octopus",
  "jungle",
  "desert",
  "volcano",
  "horizon",
  "compass",
  "rainbow",
  "weather",
  "thunder",
  "hurricane",
  "cyclone",
  "tsunami",
  "sunshine",
  "avocado",
  "broccoli",
  "sandwich",
  "cupcake",
  "pancake",
  "chocolate",
  "cucumber",
  "blueberry",
  "pineapple",
  "strawberry",
  "raspberry",
  "watermelon",
  "pomegranate",
  "coconut",
  "squirrel",
  "tortoise",
  "kangaroo",
  "ostrich",
  "woodpecker",
  "whale",
  "cheetah",
  "koala",
  "tarantula",
  "peacock",
  "castle",
  "palace",
  "pyramid",
  "stadium",
  "cathedral",
  "skyscraper",
  "museum",
  "aquarium",
  "universe",
  "galaxy",
  "telescope",
  "microscope",
  "magnet",
  "compass",
  "satellite",
  "astronaut",
  "engineer",
  "scientist",
  "architect",
  "pharmacist",
  "jewel",
  "bracelet",
  "necklace",
  "earring",
  "diamond",
  "sapphire",
  "emerald",
  "amethyst",
  "topaz",
  "crystal",
];

// Hard words Dictionary
const HardWords = [
  "photosynthesis",
  "metamorphosis",
  "onomatopoeia",
  "pneumonia",
  "hippopotamus",
  "xylophone",
  "chrysanthemum",
  "thermometer",
  "kaleidoscope",
  "philosophy",
  "quizzical",
  "vocabulary",
  "psychiatrist",
  "psychology",
  "aesthetics",
  "algorithm",
  "equilibrium",
  "encyclopedia",
  "bureaucracy",
  "connoisseur",
  "entrepreneur",
  "synchronize",
  "symmetrical",
  "hypothesis",
  "paradox",
  "phenomenon",
  "archipelago",
  "catastrophe",
  "perpendicular",
  "quarantine",
  "relinquish",
  "silhouette",
  "idiosyncrasy",
  "xenophobia",
  "hypothetical",
  "transcendental",
  "quintessential",
  "conglomerate",
  "magnanimous",
  "peninsula",
  "parliament",
  "kaleidoscopic",
  "reminiscence",
  "juxtaposition",
  "malfeasance",
  "antithesis",
  "inconspicuous",
  "infrastructure",
  "misconception",
  "dichotomy",
  "exponential",
  "unprecedented",
  "hallucination",
  "perseverance",
  "labyrinthine",
  "effervescence",
  "metamorphic",
  "parallelogram",
  "irrefutable",
  "ephemeral",
  "clandestine",
  "quagmire",
  "discombobulate",
  "disproportionate",
  "supercilious",
  "anachronism",
  "extraterrestrial",
  "predilection",
  "jurisdiction",
  "articulation",
  "culmination",
  "flabbergasted",
  "pseudonym",
  "camaraderie",
  "serendipity",
  "whimsical",
  "translucent",
  "quixotic",
  "multifaceted",
  "idyllic",
  "evanescent",
  "eloquence",
  "ostentatious",
  "grandiloquent",
  "bombastic",
  "onomatopoeic",
  "cataclysmic",
  "melancholy",
  "facetious",
  "perspicacious",
  "incorrigible",
  "vitriolic",
  "magnanimity",
  "permutation",
  "homogeneous",
  "cognizant",
  "capricious",
  "inscrutable",
  "panacea",
  "meticulous",
];

// array to store current game mode such as easy medium or hard
let currentDictionary = [];

// to store score
let score = 0;

// Event listener to change the current dictionary to easy words
document.getElementById("easy").addEventListener("click", () => {
  // change the current dictionary to easy words
  currentDictionary = EasyWords;

  // start the game
  startGame(currentDictionary, scrambledDictionaryfunc(currentDictionary));
});

// Event listener to change the current dictionary to medium words
document.getElementById("medium").addEventListener("click", () => {
  // change the current dictionary to medium words
  currentDictionary = MediumWords;

  // start the game
  startGame(currentDictionary, scrambledDictionaryfunc(currentDictionary));
});

// Event listener to change the current dictionary to hard words
document.getElementById("hard").addEventListener("click", () => {
  // change the current dictionary to hard words
  currentDictionary = HardWords;

  // start the game
  startGame(currentDictionary, scrambledDictionaryfunc(currentDictionary));
});

function showHint(word) {
  // change the text of the hint to the first letter of the word
  document.getElementById("hint").textContent = "Hint: " + word[0];
  // show the hint
  document.getElementById("hint").style.display = "block";
}

// Function to scramble the dictionary
function scrambledDictionaryfunc(wordsList) {
  // array to store scrambled words
  let scrambledDictionary = [];
  // loop through the words list
  wordsList.forEach((word) => {
    // scramble the word
    let scrambledWord = word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    // push the scrambled word to the scrambled dictionary
    scrambledDictionary.push(scrambledWord);
  });
  // return the scrambled dictionary
  return scrambledDictionary;
}

// Function to start the game
function startGame(wordsList, scrambledList) {
  let isCorrect = false;
  let scrambledIndex = 2;
  // hide the difficulty container
  document.querySelector(".difficultyContainer").style.display = "none";
  // show the game container
  document.querySelector(".gameContainer").style.display = "block";
  // get the scrambled word
  const scrambledWord = scrambledList[scrambledIndex];

  // show the hint
  // Event Listener to display hint on clicking hint button
  document.getElementById("hintButton").addEventListener("click", () => {
    showHint(wordsList[scrambledIndex][0]);
  });
  // display the scrambled word
  document.getElementById("scrambledWord").textContent = scrambledWord;

  // Event Listener to check the answer on clicking check button
  document.getElementById("checkAns").addEventListener("click", () => {
    // get the input
    let input = document.getElementById("userInput").value;

    // get the word
    let word = wordsList[scrambledIndex];

    // check the answer
    if (input !== "") {
      // check if the input is equal to the word
      if (input === word) {
        // if the input is correct, show correct answer
        document.getElementById("answerOutput").textContent =
          "✅ Correct Answer";
      }
      // if the input is wrong, show wrong answer
      else if (input !== word) {
        document.getElementById("answerOutput").textContent = "❌ Wrong Answer";
      }
    }
  });

  // Event Listener to check the answer on input
  document.getElementById("userInput").addEventListener("input", (event) => {
    // check if the input is not empty
    if (event.target.value !== "") {
      // check if the input is equal to the word
      if (event.target.value === wordsList[scrambledIndex]) {
        // if the input is correct, set isCorrect to true
        isCorrect = true;
      } else {
        // if the input is wrong, set isCorrect to false
        isCorrect = false;
      }
    }
  });

  // Event Listener to change the scrambled word
  document.getElementById("Next").addEventListener("click", () => {
    // check if the answer is correct
    if (!isCorrect) {
      // if the answer is wrong, decrement the score
      score--;
    } else {
      // if the answer is correct, increment
      score++;
    }
    // increment the scrambled index
    scrambledIndex++;
    // show the score
    document.getElementById("score").textContent = "Score: " + score;
    // get the scrambled word
    const scrambledWord = scrambledList[scrambledIndex];
    // display the scrambled word
    document.getElementById("scrambledWord").textContent = scrambledWord;
    // hide the hint
    document.getElementById("hint").style.display = "none";
    // clear the input
    document.getElementById("userInput").value = "";
    // clear the answer output
    document.getElementById("answerOutput").textContent = "";
  });
}
