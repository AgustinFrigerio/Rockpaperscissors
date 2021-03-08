let computerSelection = computerPlay();
let playerSelection = prompt("Choose rock, paper or scissors");

console.log(playRound(playerSelection, computerSelection));
function playRound(param1, param2){
  const options = ["rock", "paper", "scissors"];
  let won = "Ganaste vieja!";
  let lose = "F, perdiste contra una computadora";
  let tie = "Es un empate perro";
    if (param1===param2){
      return tie;
    } else if (param1 === "rock" && param2 === "paper"){
      return lose;
    } else if (param1 === "rock" && param2 === "scissors"){
      return won;
    } else if (param1 === "scissors" && param2 === "rock"){
      return lose;
    } else if (param1 === "scissors" && param2 === "paper"){
      return won;
    } else if (param1 === "paper" && param2 === "scissors"){
      return lose;
    } else if (param1 === "paper" && param2 === "rock"){
      return won;
    }    
}
function computerPlay(){
  const options = ["rock", "paper", "scissors"];
  const optionsPick = Math.floor(Math.random()*options.length);
   return options[optionsPick];}
const options = ["rock", "paper", "scissors"];
//function tie (){
   // const text = document.getElementById("resultext");
   /// text.classList.add('resultext');
   // text.textContent ='Es un empate perro';
//function won (){
  // const text = document.getElementById("resultext");
    //text.classList.add('resultext');
   // text.textContent ='Ganaste vieja!!!!';
//function lose (){
  //  const text = document.getElementById("resultext");
  //  text.classList.add('resultext');
  //  text.textContent ='F, perdiste contra una computadora';
