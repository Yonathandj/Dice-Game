const scoreboard = document.querySelector(".scoreboard");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const winnerBtn = document.querySelector(".winner-btn");

winnerBtn.addEventListener("click", () => {
  loadingState();
  setTimeout(() => {
    const diceValuePlayer1 = randomDiceNumber();
    const diceValuePlayer2 = randomDiceNumber();

    player1.src = `images/dice${diceValuePlayer1}.png`;
    player2.src = `images/dice${diceValuePlayer2}.png`;

    changeScoreboard(diceValuePlayer1, diceValuePlayer2);
  }, 2002);
});

const changeScoreboard = (dicePlayer1, dicePlayer2) => {
  dicePlayer1 === dicePlayer2
    ? (scoreboard.innerHTML = "Draw")
    : dicePlayer1 > dicePlayer2
    ? (scoreboard.innerHTML = "Player One Win")
    : (scoreboard.innerHTML = "Player Two Win");
};

const loadingState = () => {
  const loadingPlayer1 = setInterval(() => {
    player1.src = `images/dice${randomDiceNumber()}.png`;
  }, 200);

  const loadingPlayer2 = setInterval(() => {
    player2.src = `images/dice${randomDiceNumber()}.png`;
  }, 200);

  setTimeout(() => clearInterval(loadingPlayer1), 2000);
  setTimeout(() => clearInterval(loadingPlayer2), 2000);
};

const randomDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};
const winnerText = () => {};
