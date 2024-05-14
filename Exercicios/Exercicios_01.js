/*
Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.

Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.

Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
*/

//1.
class Pessoa {
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }

}

const Davi = new Pessoa('Davi', 21)
Davi.apresentar()
console.log("")

//2.
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
        }
    get area(){
        return this.largura * this.altura
    }
    get perimetro(){
        return (this.largura + this.altura) * 2
    }
}
const retangulo = new Retangulo(10, 5)
console.log(`A área do retângulo é ${retangulo.area} e o perímetro é ${retangulo.perimetro}`)
console.log("")

//3.
class ContaBancaria {
    constructor(agencia, numero, saldo) {
        this.agencia = agencia
        this.numero = numero
        this._saldo = saldo // Alterando o nome da propriedade interna para evitar conflitos
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        if (valor < 0) {
            throw new Error('Valor inválido')
        }
        this._saldo = valor // Atribuindo o valor à propriedade interna
    }

    depositar(valor) {
        if (valor < 0) {
            throw new Error('Valor inválido')
        }
        this._saldo += valor // Adicionando valor ao saldo
    }

    sacar(valor) {
        if (valor < 0) {
            throw new Error('Valor inválido')
        }
        if (valor > this._saldo) {
            throw new Error('Saldo insuficiente')
        }
        this._saldo -= valor // Subtraindo valor do saldo
    }
}

const ContaDavi = new ContaBancaria('1360-0', '10.842', 72000)
console.log('O seu saldo atual é: ' + ContaDavi.saldo)
ContaDavi.depositar(2000) // Chamando método depositar
console.log('O seu saldo atual é: ' + ContaDavi.saldo)
ContaDavi.sacar(1500) // Chamando método sacar
console.log('O seu saldo atual é: ' + ContaDavi.saldo)

console.log("")

//4.
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        }
        get total(){
            return this.preco * this.quantidade
        }
}
const Celular = new Produto('Xiaomi Note 12S', 1219.00, 1)
console.log(`O total do produto ${Celular.nome} é ${Celular.total}`)
console.log("")

//5
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirInformacoes() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
  }
  
  // Exemplo de uso:
  let meuCarro = new Carro('Toyota', 'Corolla', 2022);
  console.log(meuCarro.exibirInformacoes()); // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2022
  console.log("")

  //6.Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.
class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
        }
        calcularMedia() {
            let soma = 0
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i]
            }
            return soma / this.notas.length
        }
}
const Aluno1 = new Aluno('Davi', 742174, [10, 100, 85, 25, 68])
console.log(`A média do aluno ${Aluno1.nome} é ${Aluno1.calcularMedia()}`)
console.log("")

//7.
class Animal {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}`);
    }
  }
  
  // Exemplo de uso da classe Animal
  const meuAnimal = new Animal("Baleia", "Mamífero");
  meuAnimal.exibirInformacoes(); // Saída: Nome: Leão, Tipo: Mamífero
  console.log("")

  //8
  class Triangulo {
    constructor(lado1, lado2, lado3) {
      this.lado1 = lado1;
      this.lado2 = lado2;
      this.lado3 = lado3;
    }
  
    calcularArea() {
      const s = (this.lado1 + this.lado2 + this.lado3) / 2;
      return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }
  
    calcularPerimetro() {
      return this.lado1 + this.lado2 + this.lado3;
    }
  }
  
  // Exemplo de uso da classe Triangulo
  const meuTriangulo = new Triangulo(3, 4, 5);
  console.log("Área do triângulo:", meuTriangulo.calcularArea()); // Saída: Área do triângulo: 6
  console.log("Perímetro do triângulo:", meuTriangulo.calcularPerimetro()); // Saída: Perímetro do triângulo: 12
  console.log("")

  //9
  class Livro {
    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }
  
    exibirInformacoes() {
      return `titulo: ${this.titulo}, autor: ${this.autor}, Ano: ${this.ano}`;
    }
  }
  
  // Exemplo de uso:
  let meuLivro = new Livro('A Torre Negra', 'Stephen king', '1982 - 2004');
  console.log(meuLivro.exibirInformacoes()); // Saída: titulo: Toyota, autor: Corolla, Ano: 2022
  console.log("")
  
  //10
  class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.raio;
    }
  }
  
  // Exemplo de uso da classe Circulo
  const meuCirculo = new Circulo(5);
  console.log("Área do círculo:", meuCirculo.calcularArea()); // Saída: Área do círculo: 78.53981633974483
  console.log("Perímetro do círculo:", meuCirculo.calcularPerimetro()); // Saída: Perímetro do círculo: 31.41592653589793
  