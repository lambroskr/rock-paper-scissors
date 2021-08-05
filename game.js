let player_score = 0;
let computer_score = 0;
let result = "Lost!";


function game(){

    const buttons = document.querySelectorAll('input[type="image"]');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            computerSelection = computerPlay();
            playerSelection = button.value;

            playRound(playerSelection, computerSelection);
            showSelections(playerSelection, computerSelection);
            updateScore();
            checkWinner();
            
            
        });
    });   
    
}


function computerPlay(){

    const outcomes = ['rock','paper','scissors'];
    return outcomes[Math.floor(Math.random() * outcomes.length )];
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        player_score++;
        computer_score++; 
        result = 'Tied!';

    }else if(playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            player_score++;
            result = 'Won!';
        }else{
            computer_score++;
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            player_score++;
            result = 'Won!';
        }else{
            computer_score++;
        }
    }else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper'){
            player_score++;
            result = 'Won!'; 
        }else{
            computer_score++;
        }
    }
}


function showSelections(playerSelection, computerSelection){

    const computerImg = document.getElementById('computerImg');
    const playerImg = document.getElementById('playerImg');

    computerImg.style.visibility = 'visible';
    computerImg.src = "images/" + computerSelection + '.png';

    playerImg.style.visibility = 'visible';
    playerImg.src = "images/" + playerSelection + '.png';
}

function checkWinner(){

    const wonlostSpan = document.getElementById('wonlost');

    wonlostSpan.style.visibility = 'visible';

    if(player_score == computer_score == 5){
        wonlostSpan.innerHTML = "It's a draw!";

    }else if(player_score == 5){
        wonlostSpan.innerHTML = 'Player won the Computer!'
        player_score = 0;
        computer_score = 0;
    }else if(computer_score == 5){
        wonlostSpan.innerHTML = 'Computer won the Player!';
        player_score = 0;
        computer_score = 0;
    }else{
        wonlostSpan.innerHTML = 'You ' + result;
    }
}

function updateScore(){

    const scoreSpan = document.getElementById('score');
    scoreSpan.innerHTML = player_score + " - " + computer_score;

    
    
}
game();
