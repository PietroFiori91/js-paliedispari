let sceltaUtente = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
let numeroComputer = generaNumeroCasuale(1, 5);

const somma = numeroUtente + numeroComputer;
// const risultato = isPari(somma) ? "pari" : "dispari";
//google è tuo amico 01

let risultato;

if (isPari(somma)) {
  risultato = "pari";
} else {
  risultato = "dispari";
}

// function generaNumeroCasuale(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//google è tuo amico 02

function generaNumeroCasuale() {
  const min = 1;
  const max = 5;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPari(numero) {
  return numero % 2 === 0;
}

console.log("Il numero del computer è:", numeroComputer);
console.log("La somma dei numeri è:", somma);
console.log("Il risultato è:", risultato);

if (
  (risultato === "pari" && sceltaUtente === "pari") ||
  (risultato === "dispari" && sceltaUtente === "dispari")
) {
  console.log("Hai vinto!");
} else {
  console.log("Il computer ha vinto!");
}
