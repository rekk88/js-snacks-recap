// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

//creo e carico il vettore 
const numbers = [];
const a = 2;
const b = 7;

for(let i =0 ; i < 10 ; i++){
    numbers[i] = rand(0, 100);
}

console.log(numbers);

let newNumbers = numbers.filter((element,index ,a) => {
    if (index >= a){
        
        return true;
    }
    else{return false};
});

console.log(newNumbers);

// functions

function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}