/* This is a Worker JavaScript file to calculate the grid using
 ** the Sudoku Backtracking Algorithm in the background using
 ** another thread before passing the results back to the
 ** main thread to continue
 */

const sudokuGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[0] and sudokuGrid[0][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[1] and sudokuGrid[1][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[2] and sudokuGrid[2][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[3] and sudokuGrid[3][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[4] and sudokuGrid[4][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[5] and sudokuGrid[5][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[6] and sudokuGrid[6][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[7] and sudokuGrid[7][0-8]
  [0, 0, 0, 0, 0, 0, 0, 0, 0], // sudokuGrid[8] and sudokuGrid[8][0-8]
];

// TO IMPLEMENT THE BELOW FUNCTIONS
function calculateSudokuGrid() {
  backtrackOuter: for (let i = 0; i < sudokuGrid.length; i++) {
    backtrackInner: for (let j = 0; j < sudokuGrid[i].length; j++) {}
  }
}

function checkBlock(cellValue, row, col) {
  switch ([row, col]) {
    case row >= 0 && row <= 2 && col >= 0 && col <= 2: // BLOCK ONE
      return checkBlockOne(cellValue);
    case row >= 0 && row <= 2 && col >= 3 && col <= 5: // BLOCK TWO
      return checkBlockTwo(cellValue);
    case row >= 0 && row <= 2 && col >= 6 && col <= 8: // BLOCK THREE
      return checkBlockThree(cellValue);
  }
}

function checkBlockOne(cellValue) {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (sudokuGrid[i][j] === cellValue) {
        return true;
      }
    }
  }
}

function checkBlockTwo(cellValue) {
  for (let i = 0; i <= 2; i++) {
    for (let j = 3; j <= 5; j++) {
      if (sudokuGrid[i][j] === cellValue) {
        return true;
      }
    }
  }
}

function checkBlockThree(cellValue) {
  for (let i = 0; i <= 2; i++) {
    for (let j = 6; j <= 8; j++) {
      if (sudokuGrid[i][j] === cellValue) {
        return true;
      }
    }
  }
}
