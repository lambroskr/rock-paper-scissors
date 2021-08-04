const outcomes = ['rock','paper','scissors'];

function computerPlay(){
    return outcomes[Math.floor(Math.random() * outcomes.length )];
}

let player_score = 0;
let computer_score = 0;

function playRound(playerSelection, computerSelection) {

    

    if(playerSelection == computerSelection){
        console.log("It's a tie!");
        player_score++;
        computer_score++; 

    }else if(playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            console.log('Player won the Computer');
            player_score++; 
        }else{
            console.log('Player lost to the Computer');
            computer_score++;
        }

    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            console.log('Player won the Computer');
            player_score++;
            
        }else{
            console.log('Player lost to the Computer');
            computer_score++;
        }

    }else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper'){
            console.log('Player won the Computer');
            player_score++; 
        }else{
            console.log('Player lost to the Computer');
            computer_score++;
        }

    }else{
        console.log('Error');
    }
}
  


function game(){
    for(let i=1; i<6; i++){
        const playerSelection = prompt().toLowerCase();
        const computerSelection = computerPlay();

        console.log("Round " + i);
        playRound(playerSelection, computerSelection);

    }
    if(player_score > computer_score){
        console.log('Player won the Computer with score ' + player_score + "-" + computer_score);
    }else if(player_score < computer_score){
        console.log('Computer won the Player with score ' + computer_score + "-" + player_score);
    }else{
        console.log("It's a tie! " + player_score + "-" + computer_score);
    }
}

game();
