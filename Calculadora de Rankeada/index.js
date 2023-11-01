// Instruções para entrega
//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


function determineRank(victoryAmount, defeatAmount) {
    let rankBalance = victoryAmount - defeatAmount;
    
    if (rankBalance < 10) {
        return "Ferro";
    } else if (rankBalance >= 11 && rankBalance <= 20) {
        return "Bronze";
    } else if (rankBalance >= 21 && rankBalance <= 50) {
        return "Prata";
    } else if (rankBalance >= 51 && rankBalance <= 80) {
        return "Ouro";
    } else if (rankBalance >= 81 && rankBalance <= 90) {
        return "Diamante";
    } else if (rankBalance >= 91 && rankBalance <= 100) {
        return "Lendário";
    } else if (rankBalance >= 101) {
        return "Imortal";
    }
    
    return "Nível desconhecido";
}

function calculateRankBalance(victoryAmount, defeatAmount) {
    return victoryAmount - defeatAmount;
}

let victoryAmount = 50;
let defeatAmount = 20;
let rank = determineRank(victoryAmount, defeatAmount);
console.log("O Herói tem um saldo de " + calculateRankBalance(victoryAmount, defeatAmount) + " e está no nível de " + rank);
