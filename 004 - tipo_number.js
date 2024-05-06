/* 

TIPO NUMERO 
     
    PARSEINT
    PARSEFLOAT


*/

var idade = 21;
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);


var idade = '21';
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);


var idade = Number('21');
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);


var number = true;
console.log(typeof number, number);


var number = Number(false);
console.log(typeof number, number);
var number = Number(true);
console.log(typeof number, number);


var number = new Date();
number.setHours(number.getHours() - (number.getTimezoneOffset() / 60));
console.log(typeof number, number);
