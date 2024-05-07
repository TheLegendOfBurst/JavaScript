const n3 = 'Constante';//
let nome2;//
var nome1;//

/*
*****
VAR - VARIAVEL GLOBAL
Aceita SOBREESCRITA, Aceita RE-DECLARAÇÃO, CHAMAR EM QUALQUER LUGAR DO CODIGO
*****
var n1 = 'Davi';
if(true){
    var n1 = 'Rabelo'
};   
var n1 = 'Giani';
console.log(n1);
*/

/*
*****
LET - VARIAVEL DE ESCOPO
Aceita SOBREESCRITA, NÃO Aceita RE-DECLARAÇÃO, Só visivel dentro do seu bloco de codigo, 
Aceita vizualizar variaveis globais  
*****
let n2 = 'Davi';
if(true){
   console.log(n2)
};   

if(true){
    let n2 = 'Davi'
    console.log(n2)
};   

let n2 = 'Davi';
if(true){
    n2 = 'Giani'
   console.log(n2)
}; 
*/

/*
*****
CONST -  VARIAVEL DE ESCOPO
NÃO Aceita SOBREESCRITA, NÃO Aceita RE-DECLARAÇÃO, Deve ser inicializada com conteudo,
*****
const n3 = 'Davi';
if(true){
   console.log(n3)
};   

if(true){
    const n3 = 'Davi'
    console.log(n3)
};   
*/