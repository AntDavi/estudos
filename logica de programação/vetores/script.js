// Exemplo 1

let vetor = [10, 20, 30, 40, 50];

console.log(vetor[3]);

// Exemplo 2

let vetor = [];

for ( let i = 0; i<= 10; i++ ) {
    vetor.push(i);
}

console.log(vetor);

// Exemplo 3

let vetor = [10, 20, 30, 40, 50, 60];

for ( let i = 0; i < vetor.length; i++ ) {
    console.log(vetor[i])
}

// Exemplo 4

let vetor = [10, 20, 30, 40, 50, 60];

for ( let numero of vetor ) {
    console.log(numero);
}

// Exemplo 4

let vetor = [10, 20, 30, 40, 50, 60];

for ( let indice of vetor ) {
    console.log(vetor[indice]);
}

// Exemplo 5

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let linha of matriz) {
    for( let elemento of linha ) {
        console.log(elemento)
    }
}



