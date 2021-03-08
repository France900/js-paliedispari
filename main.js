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
  console.log("pippo", pippo);
  // document.getElementById("demo").innerHTML = paroal;
}
reverseString(parola)
// verifico l'uguaglianza
// var doc = document.getElementById("result");
// if (parola === ) {
//   doc.innerHTML = "Bravo, sei riuscito a scrivere una parola palindroma!"
// } else {
//   doc.innerHTML = "mi spiace, la parola inserita non è palindroma"
// }
// console.log(ciao);



// // PARI E DISPARI
// // var punisher = true
// // do {
// // } while (true);
// // utente sceglie se pari o dispari
// var doc = document.getElementById("result");
// var pariDispari = prompt("scegli pari o dispari");
// console.log("hai scelto ", pariDispari);
// // utente sceglie i numeri
// var humanNumber = prompt("adesso scegli un numero fra 1 e 5");
// console.log("hai scelto ", humanNumber);
// // computer genera numeri
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var cpuNumbers = dice(1,5)
console.log(cpuNumbers);
dice(2,7)
// // somma numeri
// var result = humanNumber + cpuNumbers
// console.log(result);
// // dichiarazione del vincitore
// if (!(result%2)) {
//   if (pariDispari == "pari") {
//     console.log("è pari, hai vinto la partita!");
//     var punisher = false
//   } else {
//     console.log("è disari, hai perso la partita!");
//     var punisher = false
//   }
// } else {
//   if (pariDispari == "dispari") {
//     console.log("è dispari, hai vinto la partita!");
//     var punisher = false
//   } else {
//     console.log("è pari, hai perso la partita!");
//     var punisher = false
//   }
// }
