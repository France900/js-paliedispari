// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
//
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// PALINDROMA

// utente inserisca una parola
var parola = prompt("Prova a inserire una parola palindroma")
console.log("inputp", parola);

// inverto ordine parola
// console.log("fuori dalla funzione", parola.split("").reverse().join(""));

function reverseString(valore) {
  var pippo = valore.split("").reverse().join("")
  console.log("parola all'inverso", pippo);
  return pippo;
  // document.getElementById("demo").innerHTML = paroal;
}
reverseString(parola)
var girata = reverseString(parola)
// verifico l'uguaglianza
var doc = document.getElementById("result");
if (parola === girata) {
  console.log("Bravo, sei riuscito a scrivere una parola palindroma!");
  doc.innerHTML = "Bravo, sei riuscito a scrivere una parola palindroma!"
} else {
  console.log("mi spiace, la parola inserita non è palindroma");
  doc.innerHTML = "mi spiace, la parola inserita non è palindroma"
}



// PARI E DISPARI
// var punisher = true
// do {
// } while (true);
// utente sceglie se pari o dispari
var doc = document.getElementById("result");
var pariDispari = prompt("scegli pari o dispari");
console.log("hai scelto ", pariDispari);
// utente sceglie i numeri
var humanNumber = parseInt(prompt("adesso scegli un numero fra 1 e 5"));
console.log("hai scelto ", humanNumber);
// computer genera numeri
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var cpuNumbers = dice(1,5)
console.log("il computer ha scelto ", cpuNumbers);
dice(2,7)
// somma numeri
var result = humanNumber + cpuNumbers
console.log("la somma dei numeri è ", result);
// dichiarazione del vincitore
// se dichiarato pari
if (result%2 == 0) {
  if (pariDispari == "pari") {
    console.log("complimenti hai vinto la partita");
  } else {
    console.log("mi dispiace, hai perso!");
  }
}
//se dichiarato dispari
if (result%2 !== 0) {
  if (pariDispari == "dispari") {
    console.log("complimenti hai vinto la partita");
  } else {
    console.log("mi dispiace, hai perso!");
  }
}
