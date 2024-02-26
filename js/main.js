/*console.log("work")

let somma = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Inserisci un numero: "));
    somma += numero;
}

console.log("La somma di tutti i numeri inseriti è: " + somma);

*/

let somma = 0;
let contatore = 0;

while (contatore < 10) {
    let numero = parseInt(prompt("Inserisci un numero: "));
    somma += numero;
    contatore++;
}

console.log("La somma di tutti i numeri inseriti è: " + somma);
