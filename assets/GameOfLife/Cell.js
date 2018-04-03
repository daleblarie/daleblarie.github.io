function Cell(pos, div, isAlive) {
  this.pos = pos;
  this.div = div;
  this.isAlive = isAlive;
}

Cell.prototype.draw = function draw() {
  if (this.isAlive) {
    this.div.classList.add('gridon');
  } else {
    this.div.classList.remove('gridon');
  }
};

Cell.prototype.numLiveNeighbors = function numLiveNeighbors(grid) {
  const neighbors = grid.getNeighbors(this);
  let surroundingAlive = 0;
  for (let i = 0; i < neighbors.length; i += 1) {
    if (neighbors[i].isAlive) {
      surroundingAlive += 1;
    }
  }
  return surroundingAlive;
};

Cell.prototype.calculateFutureIsAlive = function calculateFutureIsAlive(grid) {
  if (this.isAlive) {
    if ((this.numLiveNeighbors(grid) === 3) || (this.numLiveNeighbors(grid)) === 2) {
      return true;
    }
    return false;
  } else if (this.numLiveNeighbors(grid) === 3) {
    return true;
  }
  return false;
};

Cell.prototype.changeState = function changeState() {
  if (this.isAlive === true) {
    this.isAlive = false;
  } else {
    this.isAlive = true;
  }
  this.draw();
};
