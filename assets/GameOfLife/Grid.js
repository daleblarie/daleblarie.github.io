/* global Coord */
function Grid() {
  this.cells = {};
}

Grid.prototype.clear = function clear() {
  const listOfCells = Object.values(this.cells);
  for (let i = 0; i < listOfCells.length; i += 1) {
    listOfCells[i].isAlive = false;
  }
};

Grid.prototype.get = function get(coord) {
  return this.cells[coord.toString()];
};

Grid.prototype.add = function add(cell) {
  this.cells[cell.pos.toString()] = cell;
};

Grid.prototype.draw = function draw() {
  const listOfCells = Object.values(this.cells);
  for (let i = 0; i < listOfCells.length; i += 1) {
    listOfCells[i].draw();
  }
};

// this function will take in a cell and return a array of cells that are neighbors to it
Grid.prototype.getNeighbors = function getNeighbors(cell) {
  const mainCellPos = cell.pos;
  const neighbors = [];
  for (let i = -1; i < 2; i += 1) {
    for (let j = -1; j < 2; j += 1) {
      const currentWorkingCoord = new Coord(mainCellPos.row - i, mainCellPos.col - j);
      const currentWorkingCell = this.get(currentWorkingCoord);
      if (!(currentWorkingCell === cell)) {
        if (currentWorkingCell) {
          neighbors.push(currentWorkingCell);
        }
      }
    }
  }
  return neighbors;
};

Grid.prototype.setNextGen = function setNextGen() {
  const listOfCells = Object.values(this.cells);
  const futureStates = [];
  for (let i = 0; i < listOfCells.length; i += 1) {
    futureStates[i] = listOfCells[i].calculateFutureIsAlive(this);
  }
  for (let i = 0; i < futureStates.length; i += 1) {
    listOfCells[i].isAlive = futureStates[i];
  }
};

// Cell.div.prototype.addEventListener('click', this.changeState());
Grid.prototype.listen = function listen() {
  const listOfCells = Object.values(this.cells);
  for (let i = 0; i < listOfCells.length; i += 1) {
    listOfCells[i].div.addEventListener('click', () => { listOfCells[i].changeState(); });
  }
};

// Grid.prototype.futureIsAlive = function futureIsAlive(cells) {
//   for (let i = 0; i < cells.length; i += 1) {
//     if (cells[i].getNeighbors() < ) {
//     };
//   }
// }
