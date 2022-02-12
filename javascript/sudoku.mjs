export default class Sudoku {
  constructor() {
    this.sudokuMap = null;
  }

  // This internal method builds a Map object mapping each cell element to an object containing references to
  // that cell's block, column, and row cells
  _buildSudokuMap() {
    this.sudokuMap = new Map();
    const cells = this._getCellsInRowOrder();

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

  // This internal method checks to make sure that no other block, column,
  // or row cell has this random number assigned to it
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

  // This internal method returns a reference of all cells in row order
  _getCellsInRowOrder() {
    let cells = [];
    for (let i = 1; i <= 9; i++) {
      const rowCells = document.querySelectorAll(`[class*='sudoku__row-${i}']`);
      cells.push(Array.from(rowCells));
    }
    cells = cells.flat();

    return cells;
  }

  // This internal method iterates over each of the 81 cells and randomly populates a number 1 - 9
  _populateCells() {
    let sudokuSolver = new Worker("javascript/sudoku-solver.js");
    sudokuSolver.addEventListener("message", function (e) {
      console.log(e.data);
    });
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
