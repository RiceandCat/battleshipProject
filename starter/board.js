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
    this.miss = 'x';

    for (let i = 0; i < this.numRows; i++) {
      let row = [];
      for (let j = 0; j < this.numCols; j++) {
        row.push('');
      }
      this.grid.push(row);
    }
    // To get function that returns a random number
    // Call our function and pass in this.numRows and this.numCols
    // We want to fill in matrix with certain amaoutn of ships
    // We'll use a while loop
    // We will have an if statement to check if there is a ship there or if its empty
    // If its empty populate a ship there, else keep going 

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
    let counter = 0;

    while (counter <= this.numShips) {
      let randomRows = getRandomInt(this.numRows);
      let randomCols = getRandomInt(this.numCols);

      if (this.grid[randomRows][randomCols] === "") {
        this.grid[randomRows][randomCols] = this.undamaged;
        counter ++;
      }
    }

  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    let gridCopy = [];

    for(let i = 0; i < this.numRows; i ++) {
      let rowCopy = [...this.grid[i]];
      gridCopy.push(rowCopy);
    }

    for(let i = 0; i < this.numRows; i++) {
      for(let j = 0; j < this.numCols; j++) {
        if(this.grid[i][j] === '') {
          this.grid[i][j] = '~';
        } 
        if(this.grid[i][j] === 's') {
          this.grid[i][j] = '~';
        }
      }
    }

    console.table(this.grid);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    return this.numShips;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    if(pos[0] === "number")
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



let test = new Board (5, 5, 6);
test.populateGrid();
test.display();
module.exports = Board;
