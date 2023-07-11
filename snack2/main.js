function isPalindroma(parola) {
  const lunghezza = parola.length;

  for (let i = 0; i < lunghezza / 2; i++) {
    if (parola[i] !== parola[lunghezza - 1 - i]) {
      return false;
    }
  }

  return true;
}

let parolaUtente = prompt("Inserisci una parola:");

if (isPalindroma(parolaUtente)) {
  console.log("La parola inserita è palindroma.");
} else {
  console.log("La parola inserita non è palindroma.");
}
