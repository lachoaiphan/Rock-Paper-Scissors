document.addEventListener('DOMContentLoaded', () => {
    const maxScore = 5;
    let gameBtns = Array.from(document.querySelectorAll('.game-btn'));
    let playerDisplay = document.querySelector('.player-score');
    let computerDisplay = document.querySelector('.computer-score');
    let roundResult = document.querySelector('.result');
    let playerScore = 0;
    let computerScore = 0;

    function initalizeGame() {
        for (let i = 0; i < gameBtns.length; i++) {
            gameBtns[i].addEventListener('click', () => {
                playRound(gameBtns[i].value);
            });
        }
        displayScores();
    }

    
    function computerPlay() {
        // Computer pick random move
        // Start with a data structure that contains possible moves
        // Randomize the computer's move through data structure - indexing
        // Returns computer's move
        const moves = ['rock', 'paper', 'scissors'];
        const index = Math.round(Math.random() * (moves.length - 1));
        
        return moves[index];
    }
    
    function checkRoundResult(playerMove, computerMove) {
        // your code here!
        // playerMove is already lowercased by playerPlay function
        // Lowercase player's move for comparison with computer's move
        // Implement rules and win conditions
        // Return win statement
        if (playerMove === computerMove) {
            roundResult.textContent =
                        `Draw! This round's move is ${playerMove}.`;
            return;
        } else if ((playerMove === 'rock' && computerMove === 'scissors') ||
                 (playerMove === 'paper' && computerMove === 'rock') ||
                 (playerMove === 'scissors' && computerMove === 'paper')) {
            playerScore += 1;
            roundResult.textContent = 
                        `You win this round! ${playerMove} beats ${computerMove}!`;
        } else {
            computerScore += 1;
            roundResult.textContent = 
                        `You lose this round. ${computerMove} beats ${playerMove}...`;
        }
    }

    function displayScores() {
        playerDisplay.textContent = `Player Score: ${playerScore}`;
        computerDisplay.textContent = `Computer Score: ${computerScore}`;
    }

    function removeBtns() {
        let btnContainer = document.querySelector('.btn-container');
        while (btnContainer.firstChild) {
            btnContainer.removeChild(btnContainer.firstChild);
        }
    }
    
    function showFinal() {
        // Display final scores
        // Display result based on the scores
        if (playerScore > computerScore) roundResult.textContent = 'You won the game!';
        else if (playerScore < computerScore) roundResult.textContent = 'You lost...';
        else roundResult.textContent = 'It is a draw!'; 
        removeBtns();
    }

    
    function playRound(playerMove) {
        // Declare player and computer moves, winner of round, current scores, rounds
        // Wait for valid input from user in order to start the round properly
        // call playRound() to emulate the round
        // Score one for the respective winner of that round
        // Continue until five rounds are up
    
        let computerMove = computerPlay();
    
        checkRoundResult(playerMove, computerMove);
        displayScores();
    
        // Function that will display the end game message based on scores
        if (playerScore === maxScore || computerScore === maxScore) showFinal()
    }

    
    // Game starts with this function call to game()
    initalizeGame();
});