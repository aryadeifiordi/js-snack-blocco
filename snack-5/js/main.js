//console.log("work")

var numeriDispari = []

// Ciclo per chiedere all'utente di inserire un numero per 6 volte
for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci un numero:"));
    
    if (numero % 2 !== 0) {
        
        numeriDispari.push(numero);
    }
}

console.log("Numeri dispari inseriti:", numeriDispari);



