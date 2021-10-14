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

for (let i = 0; i < usersList.length; i++) {
  let element;
  const user = usersList[i];
  console.log(user);
  if (user != usersList) {
    console.log("puoi accedere");
    element = `<p>puoi accedere</p>`;
  } else if (user == usersList) {
    console.log("non puoi accedere");
    element = `<p>Non puoi accedere</p>`;
  }
}

const buttonControl = document.getElementById("control");
const text = document.getElementById("text");

buttonControl.addEventListener("click", function () {
  console.log("Puoi accedere");
});

/* Usiamo un input e un bottone per inserire la mail 
e poi mostriamo i risultati in pagina. */

/* DADI
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
