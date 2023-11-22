const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  function createSudokuBoard() {
    const sudokuBoard = document.getElementById('sudoku-board');
  
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const cell = document.createElement('div');
        const value = board[i][j];
  
        if (value !== 0) {
          cell.textContent = value;
        } else {
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          input.setAttribute('maxlength', '1');
          input.addEventListener('input', () => validateInput(input));
          cell.appendChild(input);
        }
  
        cell.classList.add('cell');
        sudokuBoard.appendChild(cell);
      }
    }
  }
  
  function validateInput(input) {
    const inputValue = input.value;
  
    if (!/^[1-9]$/.test(inputValue)) {
      input.value = '';
    }
  }
  
  createSudokuBoard();
  