// chiediamo il primo numero all utente
const firstNumber = parseInt(prompt("inserisci un numero"));
// chiediamo il secondo numero all utente
const secondNumber = parseInt(prompt("inserisci un numero"));

console.log(firstNumber);
console.log(secondNumber);

// Genera un numero casuale compreso fra first e second number

let thirdnumber = Math.floor(Math.random() * secondNumber) + firstNumber;

console.log("numero casuale: " + thirdnumber);
