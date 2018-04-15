/* global document Grid Coord Cell */
const GRID_SIZE = 40;
const GRID_WIDTH = 480;

const newGridButton = document.getElementById('newGrid');
const startStopLoopButton = document.getElementById('startStopGenerator');
const slider = document.getElementById('myRange');
let sliderVal = slider.value;


const sheetFunc = function sheetFunc() {
  // Create the <style> tag
  const style = document.createElement('style');

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  // WebKit hack :(
  style.appendChild(document.createTextNode(''));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
};
const sheet = sheetFunc();
sheet.insertRule(`.cell {width: ${GRID_WIDTH / GRID_SIZE}px ; height: ${GRID_WIDTH / GRID_SIZE}px }`, 0);

const grid = new Grid();

for (let i = 0; i < GRID_SIZE; i += 1) {
  const currentRow = document.createElement('div');
  currentRow.classList.add('row');
  document.getElementById('container').appendChild(currentRow);
  for (let j = 0; j < GRID_SIZE; j += 1) {
    const currentCell = document.createElement('div');
    currentCell.classList.add('cell');
    currentRow.appendChild(currentCell);
    const cell = new Cell(new Coord(i, j), currentCell, false);
    grid.add(cell);
  }
}

grid.cells['12, 26'].isAlive = true;
grid.cells['13, 26'].isAlive = true;
grid.cells['13, 28'].isAlive = true;
grid.cells['14, 9'].isAlive = true;
grid.cells['14, 27'].isAlive = true;
grid.cells['14, 29'].isAlive = true;
grid.cells['14, 34'].isAlive = true;
grid.cells['14, 35'].isAlive = true;
grid.cells['15, 9'].isAlive = true;
grid.cells['15, 10'].isAlive = true;
grid.cells['15, 27'].isAlive = true;
grid.cells['15, 30'].isAlive = true;
grid.cells['15, 34'].isAlive = true;
grid.cells['15, 35'].isAlive = true;
grid.cells['16, 0'].isAlive = true;
grid.cells['16, 1'].isAlive = true;
grid.cells['16, 4'].isAlive = true;
grid.cells['16, 5'].isAlive = true;
grid.cells['16, 10'].isAlive = true;
grid.cells['16, 11'].isAlive = true;
grid.cells['16, 27'].isAlive = true;
grid.cells['16, 29'].isAlive = true;
grid.cells['17, 0'].isAlive = true;
grid.cells['17, 1'].isAlive = true;
grid.cells['17, 4'].isAlive = true;
grid.cells['17, 5'].isAlive = true;
grid.cells['17, 10'].isAlive = true;
grid.cells['17, 11'].isAlive = true;
grid.cells['17, 12'].isAlive = true;
grid.cells['17, 26'].isAlive = true;
grid.cells['17, 28'].isAlive = true;
grid.cells['18, 4'].isAlive = true;
grid.cells['18, 5'].isAlive = true;
grid.cells['18, 10'].isAlive = true;
grid.cells['18, 11'].isAlive = true;
grid.cells['18, 26'].isAlive = true;
grid.cells['19, 9'].isAlive = true;
grid.cells['19, 10'].isAlive = true;
grid.cells['20, 9'].isAlive = true;

grid.listen();
grid.draw();

//
function assignToButton(but, func, paramArr) {
  function funct() {
    if (paramArr) {
      func(...paramArr);
    } else {
      func();
    }
  }
  but.addEventListener('click', () => { funct(); });
}

// let loop;
let shouldLoop = true;


function looper() {
  if (shouldLoop) {
    console.log('looping');
    grid.setNextGen();
    grid.draw();
    setTimeout(looper, sliderVal);
  } else {
    setTimeout(looper, sliderVal);
  }
}
setTimeout(looper(), sliderVal);
// setInterval(() => {
//   if (shouldLoop) {
//     console.log('looping');
//     grid.setNextGen();
//     grid.draw();
//   }
// }, sliderVal);


const startStopLoop = () => {
  if (shouldLoop) {
    shouldLoop = false;
    console.log('stop');
  } else {
    shouldLoop = true;
    console.log('start');
  }
};

// const startLoop = () => {
//   shouldLoop = true;
//   console.log('start');
// };

const clearGrid = function clearGrid(obj) {
  shouldLoop = false;
  console.log('clear');
  obj.clear();
  obj.draw();
};
assignToButton(startStopLoopButton, startStopLoop);
assignToButton(newGridButton, clearGrid, [grid]);

slider.oninput = function oninput() {
  sliderVal = this.value;
  console.log('change');
};
