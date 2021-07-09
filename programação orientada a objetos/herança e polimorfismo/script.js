class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf) {
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('Anthony', 20, '12345678-99', '123.456.789-00');

console.log(cidadao)
console.log(cidadao instanceof Cidadao)