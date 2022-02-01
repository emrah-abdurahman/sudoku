import { toggleTheme, hello } from "./javascript/Sudoku.mjs";

toggleTheme();
hello("Emrah");

document.querySelector(".sudoku__grid").addEventListener("click", function (e) {
  console.log(e.target);
});
