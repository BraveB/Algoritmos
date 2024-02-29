const parseMoves = (game) => game.slice(9, -1).split("],[")
            .map(move => move.replace(/\[|\]/g, '').split(',').map(Number));

const checkWinner = (board, player) => {
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
            (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
            return true;
        }
    }
    // Check diagonals for a winning sequence
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
    }
    return false;
};

const determineWinner = (gameMoves) => {
    const board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const moves = parseMoves(gameMoves);

    for (let position = 0; position < moves.length; position++) {
        const [row, col] = moves[position];
        const player = position % 2 === 0 ? 'A' : 'B'; 
        board[row][col] = player;
        if (checkWinner(board, player)) {
            return player; 
        }
    }

    return moves.length === 9 ? 'Draw' : 'Pending game';
};

// Test cases
// Output: "A"
console.log(determineWinner('moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]')); 
// Output: "B"
console.log(determineWinner('moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]'));
// Output: "Draw"
console.log(determineWinner('moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]'));