function Coord(row, col) {
  this.row = row;
  this.col = col;
}

Coord.prototype.toString = function toString() {
  return `${this.row}, ${this.col}`;
};
