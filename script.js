let currentPlayer = 'X';
let title = document.querySelector('.title');
let squares = [];
let player1Score = 0;
let player2Score = 0;
let gameOver = false;
let ok = false;


function isTie() {
    for (let i = 1; i < 10; i++) {
        if (squares[i] === '') {
            return false; // If there's an empty square, the game is not a tie
        }
    }
    return true; // All squares are filled, indicating a tie
}

function win(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} wins!`;
    document.getElementById('item' + num1).style.background = '#ffb82a';
    document.getElementById('item' + num2).style.background = '#ffb82a';
    document.getElementById('item' + num3).style.background = '#ffb82a';
    if (squares[num1] === 'X') {
        player1Score++;
        document.getElementById('score1').textContent = player1Score;
    } else {
        player2Score++;
        document.getElementById('score2').textContent = player2Score;
    }
    setTimeout(function () {
        title.innerHTML += '.';
    }, 1000);
    setTimeout(function () {
        title.innerHTML += '.';
    }, 1000);
    setTimeout(function () {
        title.innerHTML += '.';
    }, 1000);
    // for (let i = 1; i < 10; i++) {
    //     let element = document.getElementById('item' + i);
    //     element.innerHTML = '';
    //     element.style.background = '#f25';
    // }
    setTimeout(function () {
        for (let i = 1; i < 10; i++) {
            let element = document.getElementById('item' + i);
            element.innerHTML = '';
            element.style.background = '#f25';
        }
    }, 4000);


    setTimeout(function () {
        currentPlayer = 'X';
        title.innerHTML = 'X Is Next';
        ok = false;
    }, 4000);

}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            win(a, b, c);
            console.log(squares[a] + ' is win');
            ok = true;
            return;
        }
    }


    // // Rows
    // if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
    //     win(1, 2, 3);
    // } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
    //     win(4, 5, 6);
    // } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
    //     win(7, 8, 9);
    // }

    // // Columns
    // else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
    //     win(1, 4, 7);
    // } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
    //     win(2, 5, 8);
    // } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
    //     win(3, 6, 9);
    // }

    // // Diagonals
    // else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
    //     win(1, 5, 9);
    // } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != '') {
    //     win(3, 5, 7);
    // }


    if (isTie()) {
        gameOver = true; // Update game state to indicate a tie
        title.innerHTML = "It's a Tie!";
    }
}


function game(id) {
    if (ok) {
        return; // Don't allow moves if the game is over
    }
    let element = document.getElementById(id);
    if (currentPlayer === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        currentPlayer = 'O';
        title.innerHTML = 'O Is Next';
    } else if (currentPlayer === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        currentPlayer = 'X';
        title.innerHTML = 'X Is Next';
    }
    winner();
}


function resetGame() {
    // Clear the content of all squares
    for (let i = 1; i < 10; i++) {
        let element = document.getElementById('item' + i);
        element.innerHTML = '';
        element.style.background = '#f25';
    }

    // Reset currentPlayer and title
    currentPlayer = 'X';
    title.innerHTML = 'X Is Next';
    player2Score = 0;
    player1Score = 0;
    document.getElementById('score1').textContent = player1Score;
    document.getElementById('score2').textContent = player2Score;


    // setTimeout(function () {
    //     location.reload();
    // }, 0);
}