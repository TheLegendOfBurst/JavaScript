/*O que é o Laço for em JavaScript?
O laço for é uma estrutura de controle 
que permite executar repetidamente um bloco 
de código um número específico de vezes.
 É uma maneira conveniente de iterar sobre 
 elementos em uma coleção, como um array,
  ou executar uma ação repetida com base em uma 
  condição. */

  for (let i = 0; i <= 5; i++) {
    console.log(i);
}

const frutas = ['maça', 'banana', 'laranja', 'pera', 'melancia'];

for (let i = 0; i < frutas.length; i++) {
    console.log('Eu gosto de ' + frutas[i]+'\n');
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }