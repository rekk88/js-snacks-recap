// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const vet = [];

for(let i =0 ; i < 10 ; i++){
    vet[i] = rand(0, 100);
}

console.log(vet);


// functions

function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}