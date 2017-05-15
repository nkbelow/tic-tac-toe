const prompt = require('readline-sync');

class TicTacToe {
  constructor() {
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.player = 'X';
    this.totalMoves = 0;

  }

  printBoard() {
    console.log(`\t${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}`);
    console.log(`\t${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]}`);
    console.log(`\t${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}\n`);

  }

  switchPlayer() {
    this.player = this.player === 'X' ? 'O' : 'X';
  }

  isDraw() {
    if (this.totalMoves === 9) {
      return true;
    }
  }

  printDraw() {
    console.log('This game is a draw!');
  }

  isWinningCombo(a, b, c) {
    if (a === b && b === c) {
      return true;
    }
  }

  isDiagonalWinner() {
    return (this.isWinningCombo(this.board[0][0], this.board[1][1], this.board[2][2]) 
      || this.isWinningCombo(this.board[0][2], this.board[1][1], this.board[2][0])); 
  }

  isRowWinner() {
    for (var i = 0; i < 3; i++) {
      if (this.isWinningCombo(this.board[i][0], this.board[i][1], this.board[i][2])) {
        return true;
      }
    }
    return false;
  }

  isColumnWinner() {
    for (var i = 0; i < 3; i++) {
      if (this.isWinningCombo(this.board[0][i], this.board[1][i], this.board[2][i])) {
        return true;
      }
    }
    return false;
  }


  isWinner() {
    return (this.isColumnWinner() || this.isDiagonalWinner() || this.isRowWinner());
  }

  printWinner() {
    this.player = this.player === 'O' ? 'X' : 'O';
    console.log(`Player ${this.player} you have won the game!`);
  }

  isInvalidMove(move) {
    const row = Math.ceil(+move / 3) - 1;
    const column = (+move - 1) % 3;
    if (this.board[row][column] === 'X' || this.board[row][column] === 'O') {
      console.log('This move is taken please choose again');
      return true;
    } else {
      return false;
    }
  }

  printMove(move) {
    const row = Math.ceil(+move / 3) - 1;
    const column = (+move - 1) % 3;
    this.board[row][column] = this.player;
  }

  takeTurn() {
    console.log(`Player ${this.player} please take a move between 1-9`);
    let move = prompt.keyIn('Your move choice 1-9: ', {limit: '$<1-9>'});
    while (this.isInvalidMove(move)) {
      return this.takeTurn();
    }
    this.printMove(move);
  }

  play() {
    this.printBoard();
    if (this.isWinner()) {
      this.printWinner();
    } else if (this.isDraw()) {
      this.printDraw();
    } else {
      this.takeTurn();
      this.switchPlayer();
      this.play();
    }
  }
} 

const game = new TicTacToe();
game.play();

