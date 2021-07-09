class Quadrado {
    constructor(lado, altura) {
        this.cor = 'blue';
        this.lado = lado;
        this.altura = altura;
    }
    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
}

const quadrado = new Quadrado(3, 4);
// blue
console.log(quadrado.cor)
quadrado. cor = red;
//red
console.log(quadrado.cor)