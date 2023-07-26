// inserisci prima parola
const firstWord = prompt("inserisci prima parola");
// inserisci seconda parola
const secondWord = prompt("inserisci seconda parola");

//prima parola piu lunga
if (firstWord.length > secondWord.length) {
  console.log("la parola piu lunga è la prima: " + firstWord);

  //seconda parola piu lunga
} else if (secondWord.length > firstWord.length) {
  console.log("la parola piu lunga è la seconda: " + secondWord);

  //parole uguali
} else {
  console.log("le parole sono lunghe uguali: " + firstWord + " " + secondWord);
}
