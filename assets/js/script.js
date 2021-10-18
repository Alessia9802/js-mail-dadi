/* EMAIL
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo. */

// Utilizzo Prompt per chiedere email
const userMail = prompt("Qual è la tua email?");

// Utilizzo Array per creare una lista

const usersList = [
  "alessiamisciagna@yahoo.it",
  "marilena@boolean.careers",
  "valeria@boolean.careers",
];
console.log(usersList);

// Per selezionare un'utente utilizzo for loop
// Utilizzo condizione if per controllare la lista

let userAllowed = false;

for (let i = 0; i < usersList.length; i++) {
  const utente = userAllowed[i];

  if (utente == userMail) {
    userAllowed = true;
  }
}

console.log(userAllowed);

const messaggio = document.querySelector(".messaggio");

if (userAllowed) {
  console.log("Benvenuto");
  messaggio.innerHTML = "Benvenuto";
} else {
  console.log("Mi spiace, non puoi accedere");
  messaggio.innerHTML = "Mi spiace, non puoi accedere";
}

const buttonControl = document.getElementById("control");
const text = document.getElementById("text");

buttonControl.addEventListener("click", function () {
  console.log(userAllowed);
});

/* Usiamo un input e un bottone per inserire la mail 
e poi mostriamo i risultati in pagina. */

/* DADI
 Generare un numero random da 1 a 6, 
 sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const playerNum = Math.floor(Math.random() * 6) + 1;
const computerNum = Math.floor(Math.random() * 6) + 1;

console.log(playerNum, computerNum);

if (playerNum > computerNum) {
  console.log(`Player vince! Player: ${playerNum} computer: ${computerNum}`);
} else if (computerNum > playerNum) {
  console.log(`Computer vince! Player: ${playerNum} computer: ${computerNum}`);
} else {
  console.log(`Gioca ancora! Player: ${playerNum} computer: ${computerNum}`);
}
