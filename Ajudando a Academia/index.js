// A Academia de Oficiais da Federação precisa da sua ajuda para criar um programa que automatize os cálculos das médias de alunos e turmas para melhor acompanhar os seus desempenhos.Este programa será incorporado em seu sistema principal, portanto você precisa apenas desenvolver a função que calcula a média.No entanto, a função deve ser capaz de funcionar com qualquer número de alunos ou turmas. Escreva uma função que recebe um número qualquer de números inteiros

// Desafio:
// Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média.
// - Entrada: (10, 9, 6, 8, 9, 1, 5, 7)
// Saída: 6.875

function average(numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    })
    const avg = sum / numbers.length
    return avg
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7]))