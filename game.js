let player_score = 0;
let computer_score = 0;


function game(){

    const buttons = document.querySelectorAll('input[type="image"]');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            computerSelection = computerPlay();
            playerSelection = button.value;

            playRound(playerSelection, computerSelection);
            showComputerSelection(computerSelection);
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

    }else if(playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            player_score++; 
        }else{
            computer_score++;
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            player_score++;
        }else{
            computer_score++;
        }
    }else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper'){
            player_score++; 
        }else{
            computer_score++;
        }
    }
}


function showComputerSelection(computer_selection){

    const computerImg = document.getElementById('computerImg');
    computerImg.style.display = 'block';
    computerImg.src = computerSelection + '.png';
}

function checkWinner(){

    if(player_score == 5){
        alert('Player Won');
        player_score = 0;
        computer_score = 0;
    }else if(computer_score == 5){
        alert('Computer Won');
        player_score = 0;
        computer_score = 0;
    }
}

function updateScore(){

    const scoreSpan = document.getElementById('score');
    scoreSpan.innerHTML = player_score + " - " + computer_score;
}
game();
