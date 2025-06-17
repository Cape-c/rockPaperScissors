//Funcion para la elección del bot, entre 0, 1 y 2.
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

//Funcion para la elección del jugador humano,
function getHumanChoice() {
  let choice = prompt("Piedra, papel o tijera?");
  return choice.toLowerCase()  
}

//Variables de los puntajes
let computerScore = 0;
let humanScore = 0;

function playGame(){
  //Logica del juego
  //Bot: 0=Piedra; 1=Papel; 2=Tijera.
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "piedra") {
     if (computerChoice == 2) {
       console.log("gana humano: eligió tijera");
       humanScore++;
     } else if (computerChoice == 1) {
       console.log("gana bot: elegió papel");
       computerScore++;
     } else {
       console.log("empate, ambos eligieron piedra");
     }
   } else if (humanChoice == "papel") {
     if (computerChoice == 2) {
       console.log("gana bot: eligió tijera");
       computerScore++;
     } else if (computerChoice == 0) {
       console.log("gana humano: eligió piedra");
       humanScore++;
     } else {
       console.log("empate, ambos eligieron papel");
     }
   } else if (humanChoice == "tijera") {
     if (computerChoice == 1) {
       console.log("gana humano: eligió papel");
       humanScore++;
     } else if (computerChoice == 0) {
       console.log("gana bot: eligió piedra");
       computerScore++;
     } else {
       console.log("empate, ambos eligieron tijeras");
     }
   } else {
     console.log("ups, algo salió mal... :c")
   }
  }
  
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  
  playRound(humanChoice, computerChoice);
  
}

//Jugar a 5 rondas
let roundsPlayed = 0;
while (roundsPlayed < 5) {
  playGame();
  roundsPlayed++;
  console.log("Se jugaron " + roundsPlayed + " rondas.");
  console.log("Jugador: " + humanScore);
  console.log("Bot: " + computerScore);
}
