export default class Sudoku {
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
  }

  // This internal method checks to make sure that no other block, column, or row cell
  // has this random number assigned to it
  _cellNumberIsUnique(cell, possibleNumber) {
    const cellReference = this.sudokuMap.get(cell);
    const blockCells = Array.from(cellReference["blockCells"].children);
    const columnCells = Array.from(cellReference["columnCells"]);
    const rowCells = Array.from(cellReference["rowCells"]);

    if (
      blockCells.some(
        (blockCell) => blockCell.innerText === String(possibleNumber)
      )
    ) {
      return false;
    }

    if (
      columnCells.some(
        (columnCell) => columnCell.innerText === String(possibleNumber)
      )
    ) {
      return false;
    }

    if (
      rowCells.some((rowCell) => rowCell.innerText === String(possibleNumber))
    ) {
      return false;
    }

    return true;
  }

  // This internal method iterates over each of the 81 cells and randomly populates a number 1 - 9
  _populateCells() {
    let cells = [];
    for (let i = 1; i <= 9; i++) {
      const rowCells = document.querySelectorAll(`[class*='sudoku__row-${i}']`);
      cells.push(Array.from(rowCells));
    }
    cells = cells.flat();

    console.log(cells);

    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const possibleNumber = possibleNumbers[0];

    backtrack: for (let i = 0; i < cells.length; i++) {
      if (!this._cellNumberIsUnique(cells[i], possibleNumber)) {
        let previousCellNumber = (cells[i - 1].innerText += 1);
        i -= 1;
        continue backtrack;
      }

      cells[i].innerText = possibleNumber.toString();
    }

    // for (let cell of this.sudokuMap.keys()) {
    //   let possibleNumber = possibleNumbers[0];

    //   while (!this._cellNumberIsUnique(cell, possibleNumber)) {
    //     possibleNumbers.splice(randomNumberIndex, 1);
    //     randomNumberIndex = Math.floor(Math.random() * possibleNumbers.length);
    //     possibleNumber = possibleNumbers[randomNumberIndex];
    //   }

    //   cell.innerText = possibleNumber.toString();
    // }
  }

  // This internal method clears the cell numbers if starting a new game from a previous game
  _clearCells() {
    if (this.sudokuMap) {
      this.sudokuMap.forEach((cell) => (cell.innerText = ""));
    }
  }

  newGame() {
    // this._clearCells();
    this._buildSudokuMap();
    this._populateCells();
  }
}
