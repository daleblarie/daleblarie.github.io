/* global $ document */
// got the grid maker from https://codepen.io/nakessler/pen/qOdJWm
// function that builds a grid in the "container"
const gridSize = 10;

// function getcell(row, col) {
//   const $container = $('#container');
//   const $rows = $container.find('.row');
//   const $row = $($rows[row]);
//   const $cells = $row.find('.cell');
//   const $cell = $($cells[col]);
//   return $cell;
// }

function createGrid(numRows) {
  for (let rows = 0; rows < numRows; rows += 1) {
    $('#container').append("<div class='row'>");
    $('#container').append('</div>');
  }
  for (let columns = 0; columns < numRows; columns += 1) {
    $('.row').append("<div class='cell'></div>");
  }
  $('.cell').width(960 / numRows);
  $('.cell').height(960 / numRows);
}

// function that clears the grid
function clearGrid() {
  $('.cell').remove();
  $('.gridoff').remove();
  $('.gridon').remove();
}

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid() {
  clearGrid();
  createGrid(gridSize);
}

// create a 50x50 grid when the page loads
// turns the cell on when clicked, and tuns off when clicked again
// allows the click of a button to prompt the user to create a new grid
$(document).ready(() => {
  createGrid(gridSize);
  $('.cell').click(function color() {
    if ($(this).hasClass('gridoff')) {
      $(this).removeClass('gridoff');
      $(this).addClass('gridon');
    } else if ($(this).hasClass('gridon')) {
      $(this).removeClass('gridon');
      $(this).addClass('gridoff');
    } else {
      $(this).addClass('gridon');
    }
  });

  $('.newGrid').click(() => {
    refreshGrid();

    $('.cell').click(function color() {
      if ($(this).hasClass('gridoff')) {
        $(this).removeClass('gridoff');
        $(this).addClass('gridon');
      } else if ($(this).hasClass('gridon')) {
        $(this).removeClass('gridon');
        $(this).addClass('gridoff');
      } else {
        $(this).addClass('gridon');
      }
    });
  });
});
