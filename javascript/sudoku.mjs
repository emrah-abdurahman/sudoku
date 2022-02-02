class Sudoku {
  constructor() {
    this.sudokuMap = null;
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

    // console.log(this.sudokuMap);
  }

  // This internal method iterates over each of the 81 cells and randomly populates a number 1 - 9
  _populateCells() {
    this.sudokuMap.forEach(function (cell) {
      const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const possibleNumber =
        possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];

      this._cellNumberIsUnique(cell, possibleNumber);
    });
  }

  // This internal method checks to make sure that no other block, column, or row cell has this random number assigned to it
  _cellNumberIsUnique(cell, possibleNumber) {
    console.log("Cell:", cell);
    console.log("Random Number:", possibleNumber);
  }

  newGame() {
    this._buildSudokuMap();
    this._populateCells();
  }
}

export default Sudoku;
