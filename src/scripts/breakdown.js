import GameTracker from "../classes/gameTracker";

export default () => {
  const currentGame = new GameTracker();
  document.querySelector(".answer").style.display = "none";
  document.getElementById(
    `player${currentGame.getCurrentPlayer()}`
  ).style.display = "block";
  document.getElementById("banner").style.display = "block";
  document.querySelector("h1").style.visibility = "hidden";

  if (currentGame.getPlayers() === 1) {
    document.getElementById("banner").textContent = "BLOCK COMPLETED";
  } else if (player1Points > player2Points) {
    document.getElementById("banner").textContent = "PLAYER 1 WINS";
  } else if (player2Points > player1Points) {
    document.getElementById("banner").textContent = "PLAYER 2 WINS";
  }

  setTimeout(() => {
    document.querySelector("h1").style.visibility = "visible";

    ["turn", "banner", `player${currentGame.getCurrentPlayer()}`].forEach(
      (element) => (document.getElementById(element).style.display = "none")
    );

    document.querySelector(".finish").style.display = "block";

    const player1CorrectQuestions = currentGame.getCorrectQuestions("player1");
    const player1IncorrectQuestions = currentGame.getIncorrectQuestions(
      "player1"
    );
    const player2CorrectQuestions = currentGame.getCorrectQuestions("player2");
    const player2IncorrectQuestions = currentGame.getIncorrectQuestions(
      "player2"
    );

    for (let i = 0; i <= currentGame.getUsedQuestions().length; i++) {
      $("#player-1-correct").append(player1CorrectQuestions[i]);
      $("#player-1-incorrect").append(player1IncorrectQuestions[i]);
      $("#player-2-correct").append(player2CorrectQuestions[i]);
      $("#player-2-incorrect").append(player2IncorrectQuestions[i]);
    }

    if (currentGame.getPlayers() === 1) {
      document.getElementById("player1Finish").textContent = "OVERVIEW";
      [
        "player-2-finish",
        "player-2-correct",
        "player-2-incorrect",
        "player-2-finish",
      ].forEach(
        (element) => (document.getElementById(element).style.display = "block")
      );
    }
  }, 5000);
};
