/*
    O switch é uma estrutura de controle em 
    JavaScript que permite realizar comparações múltiplas 
    em um valor e executar diferentes blocos de código com base 
    nos resultados dessas comparações. Aqui 
    está um resumo do switch:
*/



const dia = 2;
let diaTexto;

switch (dia) {
  case 1:
    diaTexto = "Domingo";
    break;
  case 2:
    diaTexto = "Segunda-feira";
    break;
  case 3:
    diaTexto = "Terça-feira";
    break;
  case 4:
    diaTexto = "Quarta-feira";
    break;
  case 5:
    diaTexto = "Quinta-feira";
    break;
  case 6:
    diaTexto = "Sexta-feira";
    break;
  case 7:
    diaTexto = "Sábado";
    break;
  default:
    diaTexto = "Dia inválido";
}

console.log("Hoje é " + diaTexto);

const pontuacao = 75;
let mensagem;

switch (true) {
  case pontuacao >= 90:
    mensagem = "Excelente desempenho!";
    break;
  case pontuacao >= 70:
    mensagem = "Bom trabalho!";
    break;
  case pontuacao >= 50:
    mensagem = "Você pode melhorar.";
    break;
  default:
    mensagem = "Estude mais!";
}

console.log(mensagem);

  