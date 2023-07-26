//creo un array vuoto
const mainContainer = [];

//creo costante per contenere i numeri
let sum = 0;

//finche non si ragiunge 50,chiedo un numero
while (sum < 50) {
  //chiedo all utente un numero
  let addNumber = parseInt(prompt("inserisci numero"));
  sum += addNumber;

  mainContainer.push(addNumber);
}
console.log(mainContainer);
