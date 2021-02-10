class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;

  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.

    this.grid = [];
    this.destroyed = 'h';
    this.undamaged = 's';
    this.empty = 'null';
    this.hit = 'h';
    this.miss = 'x'

    for (let i = 0; i < this.numRows; i++) {
      let row = [];
      for (let j = 0; j < this.numCols; j++) {
        row.push('');
      }
      this.grid.push(row);
    }

  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()

    console.table(this.grid);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}



let test = new Board (3, 3, 6);
test.populateGrid();
test.display();
module.exports = Board;
