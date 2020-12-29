import GameTracker from "../classes/gameTracker";
import setup from './setup';
import continueGame from './continueGame';
import replayGame from './replayGame';
import guessPress from './guessPress';

document.addEventListener("DOMContentLoaded", () => {
  const currentGame = new GameTracker();
  const guessElement = document.getElementById("guess");
  const continueElement = document.getElementById("continue");
  const replayElement = document.getElementById("replay");

  const chooseQuestionType = (type) => {
    currentGame.setPicked(type);
    const picked = currentGame.getPicked(type);

    document.getElementById(type).style.opacity = picked ? 1 : 0.5;
  };

  ["html", "css", "js"].forEach((type) => {
    document
      .getElementById(type)
      .addEventListener("click", () => chooseQuestionType(type));
  });

  ["solo", "versus"].forEach((type) => {
    document.getElementById(type).addEventListener("click", () => {
      const isSolo = type === "solo";
      const otherType = isSolo ? "versus" : "solo";
      const amountOfPlayersOptionOne = document.getElementById(type);
      const amountOfPlayersOptionTwo = document.getElementById(otherType);
      
      amountOfPlayersOptionOne.style.opacity = 1;
      amountOfPlayersOptionTwo.style.opacity = 0.5;
      currentGame.changePlayer(isSolo ? 1 : 2);
    });
  });

  document.getElementById("start").addEventListener("click", () => {
    const setupElement = document.getElementById("setup");
    const gameElement = document.getElementById("game");
    const noQuestionSetPicked =
      !currentGame.getPicked("html") &&
      !currentGame.getPicked("css") &&
      !currentGame.getPicked("js");
    if (noQuestionSetPicked) {
      alert("You must select at least one set of questions to begin.");
    } else {
      setupElement.style.display = "none";
      gameElement.style.display = "block";
      setup();
    }
  });


  guessElement.addEventListener("click", guessPress);
  continueElement.addEventListener("click", continueGame);
  replayElement.addEventListener("click", replayGame);
});
