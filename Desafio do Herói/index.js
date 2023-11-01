// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

const heroName = "Erion";
let heroExperience = 0;

console.log('O Herói de nome ' + heroName + ' está no nível ' + heroExperience)

do {
    console.log(heroName + ' venceu mais uma batalha.' + ' Ele ganho mais expériencia!')
    heroExperience++;
    console.log('XP atual: ' + heroExperience)

    if (heroExperience <= 10) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Fero')
        console.log('')
    }
    if (heroExperience > 10 && heroExperience <= 20) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Bronze')
        console.log('')
    }
    if (heroExperience > 20 && heroExperience <= 30) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Prata')
        console.log('')
    }
    if (heroExperience > 30 && heroExperience <= 40) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Ouro')
        console.log('')
    }
    if (heroExperience > 40 && heroExperience <= 50) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Platina')
        console.log('')
    }
    if (heroExperience > 50 && heroExperience <= 60) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Ascendente')
        console.log('')
    }
    if (heroExperience > 60 && heroExperience <= 70) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Imortal')
        console.log('')
    }
    if (heroExperience > 70 && heroExperience <= 80) {
        console.log(heroName + ' tem ' + heroExperience + ' pontos de experiencia.')
        console.log('Ele é um herói nível Radiante')
        console.log('')
    }
} while (heroExperience < 100);