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