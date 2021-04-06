const roundsInput = document.querySelector("#rounds");
const resetButton = document.querySelector("#reset");

// default winning score is 5
let winningScore = 5;

const player1 = {
    score: 0,
    display: document.querySelector("#score1"),
    btn: document.querySelector("#player1"),
}

const player2 = {
    score: 0,
    display: document.querySelector("#score2"),
    btn: document.querySelector("#player2"),
}

// can modify this array for future iterations if needed
const players = [player1, player2];

// event listener for select element
roundsInput.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    roundsInput.disabled = "true";
    reset();
});

// event listener for player 1's button
player1.btn.addEventListener("click", function() {
    updateScores(player1, player2);
});

// event listener for player 2's button
player2.btn.addEventListener("click", function() {
    updateScores(player2, player1);
});

// event listener for reset button
resetButton.addEventListener("click", reset);

function updateScores(player, opponent) {
    // update score & display
    player.score ++;
    player.display.innerText = player.score;
    
    // check for winning / game-game
    if (player.score === winningScore) {
        // change colors
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");
        
        // disable buttons
        player.btn.disabled = true;
        opponent.btn.disabled = true;
        
        // mini reset
        resetButton.innerText = "Play Again?"
        roundsInput.disabled = false;

    } else if (player.score === opponent.score && player.score === (winningScore - 1)) {
        // increase winning score by 1
        winningScore++;
    }
}

// reset the game
function reset() {
    // reset players
    for (let player of players) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove("has-text-success", "has-text-danger");
        player.btn.disabled = false;
    }
    
    // mini reset
    resetButton.innerText = "Reset"
    roundsInput.disabled = false;
}
