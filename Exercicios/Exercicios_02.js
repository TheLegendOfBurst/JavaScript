/*
Exercício 1: Criação de Objeto Literal
Crie um objeto literal que represente um livro, com 
as propriedades titulo, autor e ano. Em seguida, 
imprima as informações do livro no console.

Exercício 2: Adição de Método
Adicione um método informacoes() ao objeto 
livro que imprima todas as informações do livro, 
incluindo título, autor e ano.

Exercício 3: Lista de Compras
Crie um objeto literal que represente uma 
lista de compras, onde cada item da lista é uma 
propriedade com o nome do item e a quantidade desejada.

Exercício 4: Adição e Remoção de Itens
Adicione métodos ao objeto lista de compras para
 adicionar um novo item à lista e remover um item existente.

Exercício 5: Total da Compra
Adicione um método ao objeto lista de compras para 
calcular o valor total da compra, com base na quantidade
 desejada de cada item e seus preços individuais.

Exercício 6: Registro de Funcionários
Crie um objeto literal que represente um registro de 
funcionários, onde cada funcionário é representado por um 
objeto com propriedades como nome, cargo e salário.

Exercício 7: Adição de Funcionários
Adicione métodos ao objeto registro de funcionários 
para adicionar um novo funcionário ao registro e remover um funcionário existente.

Exercício 8: Aumento de Salário
Adicione um método ao objeto registro de funcionários 
para aumentar o salário de todos os funcionários em uma certa porcentagem.

Exercício 9: Contato
Crie um objeto literal que represente um contato, 
com propriedades como nome, email e telefone.

Exercício 10: Lista de Contatos
Crie um array de objetos literais que representem uma lista 
de contatos. Cada objeto deve ter as mesmas propriedades 
definidas no exercício anterior. Adicione métodos para 
adicionar um novo contato à lista, remover um contato
 existente e buscar um contato pelo nome.
*/

//Exercício 1: Criação de Objeto Literal. Crie um objeto literal que represente um livro, com as propriedades titulo, autor e ano. 
//Em seguida, imprima as informações do livro no console.
var livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
    };
console.log(livro.titulo, livro.autor, livro.ano);
console.log("")


//Exercício 2: Adição de Método. Adicione um método informacoes() ao objeto livro que imprima todas as informações do livro, incluindo título, autor e ano.
var livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    informacoes() {
        console.log("Título: " + this.titulo + ", Autor: " + this.autor + ", Ano: " + this.ano);
    }
}
livro.informacoes();
console.log("")

//Exercício 3: Lista de Compras. Crie um objeto literal que represente uma lista de compras, onde cada item da lista é uma propriedade com o nome do item e a quantidade desejada.
var ListaCompras = {
    "Arroz": 2,
    "Feijão": 1,
    "Macarrão": 1,
    "Oleo": 3,
    "Papel Higienico": 1,
    "Detergente": 2,
    "Frango": 2
}

for (let item in ListaCompras) {
    if (typeof ListaCompras[item] !== 'function') {
        console.log(item + ": " + ListaCompras[item]);
    }
}   
console.log("")

//Exercício 4: Adição e Remoção de Itens. Adicione métodos ao objeto lista de compras para adicionar um novo item à lista e remover um item existente.
var ListaCompras = {
    "Arroz": 2,
    "Feijão": 1,
    "Macarrão": 1,
    "Oleo": 3,
    "Papel Higienico": 1,
    "Detergente": 2,
    "Frango": 2,
    adicionarItem(item, quantidade) {
        this[item] = quantidade;
        console.log(item + " adicionado a lista \n")
    },
    removerItem(item) {
        delete this[item];
        console.log(item + " removido da lista \n")
    }
}
//Lista
for (let item in ListaCompras) {
    if (typeof ListaCompras[item] !== 'function') {
        console.log(item + ": " + ListaCompras[item]);
    }
}
console.log("");

//Adiciconar e Remover
ListaCompras.adicionarItem("Sabonete", 10);
ListaCompras.removerItem("Macarrão");

//Lista Apos
for (let item in ListaCompras) {
    if (typeof ListaCompras[item] !== 'function') {
        console.log(item + ": " + ListaCompras[item]);
    }
}
console.log("");

/*Exercício 5: Total da Compra. Adicione um método ao objeto lista de compras para calcular o valor total da compra, 
com base na quantidade desejada de cada item e seus preços individuais.*/
var ListaCompras = {
    valor: 0,
    adicionarItem(item, quantidade, preco) {
        this[item] = quantidade;
        this.valor += quantidade * preco
    },
    removerItem(item, preco) {
        let quantidade = this[item]; // Capture a quantidade antes de deletar
        delete this[item];
        this.valor -= quantidade * preco;
    }
}
//Adicionando Itens Na lista
ListaCompras.adicionarItem("Arroz", 2, 30.50);
ListaCompras.adicionarItem("Feijão", 1, 15.20);
ListaCompras.adicionarItem("Macarrão", 1, 3);
ListaCompras.adicionarItem("Oleo", 3, 8.30);
ListaCompras.adicionarItem("Papel Higienico", 1, 25.50);
ListaCompras.adicionarItem("Detergente", 2, 3.2);
ListaCompras.adicionarItem("Frango", 2, 10.99);

//Lista com Valor Total: 
console.log("Lista com Valor Total apos Adição: ");
for (let item in ListaCompras) {
    if (typeof ListaCompras[item] !== 'function') {
        console.log(item + ": " + ListaCompras[item]);
    }
}
console.log("");

//Removendo Itens na lista
ListaCompras.removerItem("Detergente", 3.2);
ListaCompras.removerItem("Frango", 10.99);

//Lista com Valor Total: 
console.log("Lista com Valor Total apos Remoção: ");
for (let item in ListaCompras) {
    if (typeof ListaCompras[item] !== 'function') {
        console.log(item + ": " + ListaCompras[item]);
    }
}
console.log("");

/*Exercício 6: Registro de Funcionários Crie um objeto literal que represente um registro de funcionários,
onde cada funcionário é representado por um objeto com propriedades como nome, cargo e salário.*/
let registroFuncionarios = {
    funcionarios: [
        {
            nome: "Davi Giani",
            cargo: "Analista de Sistemas",
            salario: 5000
        },
        {
            nome: "Arthur Sampaia",
            cargo: "Gerente de Vendas",
            salario: 7000
        },
        {
            nome: "Tiago Ventura",
            cargo: "Filho do Arthur",
            salario: 0
        }
    ]
};
registroFuncionarios.funcionarios.forEach(funcionario => {
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
});
console.log("")

/*Exercício 7: Adição de Funcionários Adicione métodos ao objeto registro de funcionários para adicionar um novo funcionário ao registro
e remover um funcionário existente.*/
let registroFuncionarios1 = {
    funcionarios: [
        {
            nome: "Davi Giani",
            cargo: "Analista de Sistemas",
            salario: 5000
        },
        {
            nome: "Arthur Sampaia",
            cargo: "Gerente de Vendas",
            salario: 7000
        },
        {
            nome: "Tiago Ventura",
            cargo: "Filho do Arthur",
            salario: 0
        }
    ],
    adicionarFuncionario: function(funcionario) {
        this.funcionarios.push(funcionario);
    },
    removerFuncionario: function(nome) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome!== nome);
    }
};

registroFuncionarios1.adicionarFuncionario({
    nome: "João Silva",
    cargo: "Desenvolvedor",
    salario: 6000
});

console.log(registroFuncionarios1.funcionarios);

registroFuncionarios1.removerFuncionario("Tiago Ventura");

console.log(registroFuncionarios1.funcionarios);
console.log("")

/*Exercício 8: Aumento de Salário Adicione um método ao objeto registro de funcionários para aumentar o salário de todos os funcionários
em uma certa porcentagem.*/
let registroFuncionarios2 = {
    funcionarios: [
        {
            nome: "Davi Giani",
            cargo: "Analista de Sistemas",
            salario: 5000
        },
        {
            nome: "Arthur Sampaia",
            cargo: "Gerente de Vendas",
            salario: 7000
        },
        {
            nome: "Tiago Ventura",
            cargo: "Filho do Arthur",
            salario: 0
        }
    ],
    aumentarSalario: function(porcentagem) {
        this.funcionarios.forEach(funcionario => {
            funcionario.salario = funcionario.salario + (funcionario.salario * porcentagem);
        });
    }
    };
    
    registroFuncionarios2.aumentarSalario(10);
    
    console.log(registroFuncionarios2.funcionarios);
console.log("")

/*Exercício 9: Contato Crie um objeto literal que represente um contato, com propriedades como nome, email e telefone.*/

let contato = {
    nome: "Davi",
    email: "davi.giani@aluno.senai.br",
    telefone: "61 98102-9644"
};

console.log(contato);

/*Exercício 10: Lista de Contatos Crie um array de objetos literais que representem uma lista de contatos.
Cada objeto deve ter as mesmas propriedades definidas no exercício anterior. Adicione métodos para adicionar um novo contato à lista, 
remover um contato existente e buscar um contato pelo nome.*/
let listaContatos = {
    contatos: [
    {
        nome: "Davi",
        email: "davi.giani@aluno.senai.br",
        telefone: "61 98102-9644"
    },
    {
        nome: "Arthur",
        email: "arthur.sampaia@aluno.senai.br",
        telefone: "61 99999-9999"
    },
    {
        nome: "Tiago",
        email: "tiago.ventura@aluno.senai.br",
        telefone: "61 98888-8888"
    }
    ],
    // Função para adicionar um novo contato à lista
    adicionarContato: function(contato) {
        this.contatos.push(contato);
    },
    // Função para remover um contato da lista pelo nome
    removerContato: function(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome!== nome);
    },
    // Função para buscar um contato na lista pelo nome
    buscarContato: function(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }
}


// Adicionando um novo contato
listaContatos.adicionarContato({
    nome: "João",
    email: "joao.silva@aluno.senai.br",
    telefone: "61 98102-9466"
});

console.log(listaContatos.contatos);

// Removendo um contato
listaContatos.removerContato("Tiago");

console.log(listaContatos.contatos);

// Buscando um contato pelo nome
console.log(listaContatos.buscarContato("João"));
