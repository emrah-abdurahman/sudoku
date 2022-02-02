import Sudoku from "./javascript/Sudoku.mjs";

let sudoku = null;
const startNewGameBtn = document.querySelector(".sudoku__start-game-btn");

startNewGameBtn.addEventListener("click", () => {
  sudoku = new Sudoku();
  sudoku.newGame();
});
