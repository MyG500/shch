let board = [];
let cols = 8;
let rows = 8;

for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
        if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
            board[i][j] = "black"
        } else {
            board[i][j] = "white"

        }
    }
}
console.log(board);