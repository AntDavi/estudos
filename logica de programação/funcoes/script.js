//  Exemplo 1

function escreva (texto) {
    console.log(texto);
}

escreva('Meu primeiro app');
escreva('Meu segundo app');

// Exemplo 2

function somar( a, b ) {
    return a+b;
}

let resultado = somar( 1, 3 );

console.log(resultado)

//  Exemplo 3

const calc = function(a, b) {return a+b};

console.log(calc(1, 3))

//  Exemplo 4

const calculadora = (a, b) => a+b;

console.log(calculadora(1, 3))
