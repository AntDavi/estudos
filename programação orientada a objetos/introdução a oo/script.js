// Exemplo 1

const pessoa = {
    nome: 'Anthony',
    idade: 20
};

console.log(pessoa.nome)

// Exemplo 2

const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function(){
        return this.base*this.altura
    }
}

console.log(quadrado.calculaArea())

// Exemplo 3

const agenda = {
    contato : [
        {
            nome: 'contato1',
            telefone: '85 99999-9999',
            email: 'contato1@email.com'
        },
        {
            nome: 'contato2',
            telefone: '85 99999-9999',
            email: 'contato2@email.com'
        },
        {
            nome: 'contato3',
            telefone: '85 99999-9999',
            email: 'contato3@email.com'
        },
        {
            nome: 'contato4',
            telefone: '85 99999-9999',
            email: 'contato4@email.com'
        },
    ],
    adicionar : function(contato)  { this.contato.push(contato) } 
}

console.log(agenda.contato)