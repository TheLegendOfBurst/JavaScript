/*
    Introdução às Classes:

    Classes são uma forma de definir objetos em JavaScript, 
    introduzidas no ECMAScript 2015 (ES6).
    Elas fornecem uma sintaxe mais clara e orientada a objetos 
    para criar objetos e lidar com herança.

    Constructor:

    O método constructor é um método especial chamado no momento da criação de uma instância da classe.
    Ele é usado para inicializar as propriedades do objeto.
    Métodos:

    Métodos são funções definidas dentro da classe.
    Eles podem acessar e manipular propriedades do objeto usando a palavra-chave this.
    Instância:

    Uma instância é um objeto criado a partir de uma classe usando a palavra-chave new.
    Cada instância possui suas próprias cópias das propriedades da classe.
    Herança:

    Classes em JavaScript suportam herança usando a palavra-chave extends.
    A classe filha pode herdar propriedades e métodos da classe pai.

    
*/

class MinhaClasse {
    constructor(parametros) {
        this.propriedade = valor;
    }

    metodo() {
        // corpo do método
    }
}

//HERANÇA
class Animal {
    comer() {
        console.log("Comendo...");
    }
}

class Cachorro1 extends Animal {
    latir() {
        console.log("Au Au!");
    }
}
/* 
   O método super é usado dentro de uma classe filha para chamar métodos da classe pai.
   Ele é usado no construtor para chamar o construtor da classe pai.
*/

class Cachorro extends Animal {
    constructor(nome) {
        super();
        this.nome = nome;
    }
}


/*  
    Getters são usados para obter o valor de uma propriedade.
    Setters são usados para definir o valor de uma propriedade.
    Eles são definidos usando as palavras-chave get e set.
*/

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    get area() {
        return this.largura * this.altura;
    }

    set area(valor) {
        this.largura = Math.sqrt(valor);
        this.altura = Math.sqrt(valor);
    }
}
