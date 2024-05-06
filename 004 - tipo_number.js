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

var number = Number(new Date());
console.log(typeof number, number);

var n = '29.230421598321684'
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

var n = '29.23'
console.log(typeof n, n)
console.log(typeof parseFloat(n), parseFloat(n))