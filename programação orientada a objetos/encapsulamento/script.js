// Exemplo 1

function createQuadrado(base, altura){

    let cor = 'blue';
  
    return {
      base,
      altura,
      getCor : function() { return cor; }
    };
  
  }
  
  const quadrado = createQuadrado(3,4);
  console.log(quadrado);
  //{ base: 3, altura: 4, getCor: [Function: getCor] }
  console.log(quadrado.cor);
  //undefined
  quadrado.cor = 'red';
  console.log(quadrado.cor);
  //red
  console.log(quadrado.getCor());
  //blue

// Exemplo 2

class Quadrado{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
    }
  }
  
  const quadrado = new Quadrado(3,4);
  console.log(quadrado);
  //Quadrado { lado: 3, altura: 4, getCor: [Function], setCor: [Function] }
  console.log(quadrado.getCor());
  //blue
  quadrado.cor = 'red'; //errado! cria um atributo cor a mais no objeto!
  console.log(quadrado.cor);
  //red
  console.log(quadrado.getCor());
  //blue