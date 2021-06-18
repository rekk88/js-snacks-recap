// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

//creo e carico il vettore 
const numbers = [];

for(let i =0 ; i < 10 ; i++){
    numbers[i] = rand(0, 100);
}

console.log(numbers);

let mandarino = newArray(numbers , 2 , 7);
console.log(mandarino);


//creo il nuovo array "filtrato"


// functions

function newArray(vet , min , max){
    let newNumbers = vet.filter((element,index,array) => { //il terzo parametro array rappresenta l'array di partenza e quindi vet (in questo caso)
        if (index >= min && index <=max){
            console.log(array[index]); 
            return true;
        }
        else{return false};
    });
    return newNumbers;
}

function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}