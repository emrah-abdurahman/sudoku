// A JavaScript file to hold old code temporarily while refactoring
// newer code and making changes. These act as a reference if needed

// From sudoku.mjs file
class Sudoku {
  _populateCells() {
    // SOLUTION:
    let cells = [];
    for (let i = 1; i <= 9; i++) {
      const rowCells = document.querySelectorAll(`[class*='sudoku__row-${i}']`);
      cells.push(Array.from(rowCells));
    }
    cells = cells.flat();

    for (let cell of cells) {
      const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let randomNumberIndex = Math.floor(
        Math.random() * possibleNumbers.length
      );
      let possibleNumber = possibleNumbers[randomNumberIndex];

      while (!this._cellNumberIsUnique(cell, possibleNumber)) {
        possibleNumbers.splice(randomNumberIndex, 1);
        randomNumberIndex = Math.floor(Math.random() * possibleNumbers.length);
        possibleNumber = possibleNumbers[randomNumberIndex];
      }

      cell.innerText = possibleNumber.toString();
    }
  }

  // SOLUTION:
  for (let cell of this.sudokuMap.keys()) {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let randomNumberIndex = Math.floor(
      Math.random() * possibleNumbers.length
    );
    let possibleNumber = possibleNumbers[randomNumberIndex];

    while (!this._cellNumberIsUnique(cell, possibleNumber)) {
      possibleNumbers.splice(randomNumberIndex, 1);
      randomNumberIndex = Math.floor(Math.random() * possibleNumbers.length);
      possibleNumber = possibleNumbers[randomNumberIndex];
    }

    cell.innerText = possibleNumber.toString();
  }
}
