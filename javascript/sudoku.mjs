export default class Sudoku {
  constructor() {
    this.sudokuMap = null;
    this.sudokuTimer = null;
  }

  // This internal method builds a Map object mapping each cell element to an object containing references to
  // that cell's block, column, and row cells
  _buildSudokuMap() {
    this.sudokuMap = new Map();
    const cells = document.querySelectorAll(".sudoku__block-cell");

    cells.forEach((cell) => {
      const cellClassList = cell.classList;
      const columnCells = document.querySelectorAll(`.${cellClassList[2]}`);
      const rowCells = document.querySelectorAll(`.${cellClassList[3]}`);

      this.sudokuMap.set(cell, {
        blockCells: cell.parentNode,
        columnCells: columnCells,
        rowCells: rowCells,
      });
    });

    console.log("Sudoku Map:", this.sudokuMap);
  }

  // This internal method checks to make sure that no other block, column, or row cell has this random number assigned to it
  _cellNumberIsUnique(cell, possibleNumber) {
    const cellReference = this.sudokuMap.get(cell);
    const blockCells = Array.from(cellReference["blockCells"].children);
    const columnCells = cellReference["columnCells"];
    const rowCells = cellReference["rowCells"];

    blockCells.forEach((blockCell) => {
      if (blockCell.textContent === String(possibleNumber)) {
        return false;
      }
    });

    columnCells.forEach((columnCell) => {
      if (columnCell.textContent === String(possibleNumber)) {
        return false;
      }
    });

    rowCells.forEach((rowCell) => {
      if (rowCell.textContent === String(possibleNumber)) {
        return false;
      }
    });

    return true;
  }

  // This internal method iterates over each of the 81 cells and randomly populates a number 1 - 9
  _populateCells() {
    for (let cell of this.sudokuMap.keys()) {
      const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let possibleNumber =
        possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];

      while (!this._cellNumberIsUnique(cell, possibleNumber)) {
        const numberIndex = possibleNumbers.indexOf(possibleNumber);
        possibleNumbers.splice(numberIndex, 1);
        possibleNumber =
          possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];
      }
      cell.textContent = possibleNumbers.shift();
      console.log("Possible Numbers:", possibleNumbers);
    }
  }

  newGame() {
    this._buildSudokuMap();
    this._populateCells();
  }
}
