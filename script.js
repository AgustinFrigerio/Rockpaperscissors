
function newRound (playerSelection){


const options = ['rock' 'paper' 'scissors']
function computerPlay(){
   const optionsPick = Math.floor(Math.random() * options.length);
    return options [optionsPick];
}
let computerSelection = computerPlay();
function playRound(playerSelection, computerSelection){
    if (computerSelection==playerSelection)
    tie;
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    lose;
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    won;
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    lose;  
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    won;
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    lose;
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    won;
}
}
function tie (){
    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='Es un empate perro';
}
function won (){
    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='Ganaste vieja!!!!';
}
function lose (){
    const text = document.getElementById("resultext");
    text.classList.add('resultext');
    text.textContent ='F, perdiste contra una computadora';
}
asda