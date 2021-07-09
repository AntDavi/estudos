// Exemplo 1

let estaSol = false;

if(estaSol){
    console.log('Vou para a praia')
}
else{
    console.log('Vou para o campo')
}

// Exemplo 2

let numeros = -1;

if( numeros > 0 ) {
    console.log("Número positivo")
}

else if ( numeros == 0 ) {
    console.log("Número é zero")
}

else {
    console.log("Número negativo")
}

// Exemplo 3

let numero = 3;

let paridade = numero % 2 == 0 ? 'Par' : 'Impar';

console.log(paridade);

// Exemplo 4

let sinal = 'vermelho';

switch(sinal) {
    case 'verde' :
        console.log('Pode passar!');
        break;
    case 'amarelo' :
        console.log('Prestes a fechar, cuidado...')
        break;
    case 'vermelho' :
        console.log('Fechado, não passe!')
        break;
    default:
        console.log('Sinal inválido')
}