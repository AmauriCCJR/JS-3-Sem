/*console.log('Ola mundo');
var nome2 = "Fatec";//Var pode ser usado em quaquer parte do codigo
let nome = "Fatecon";//let restringe uma variavel dentro de um escopo. ex: while x<1 {let nome = blablabla} - O let só funciona dentro do while
//let funciona para codigos abaixo dele, mas não para os codigos a cima
console.log('Nome é: '+ nome);
console.log(`Nome2 é: ${nome2}`); //chamar variavel dentro de uma templateString
let num1 = 50;
let num2 = 25;


console.log(`A soma dos valores é: ${num1 + num2}`);// soma dentro da templateString
console.log('A subtração dos valores é: '+ (num1 - num2));// subtração de valores normal
console.log(num1+' dividido por '+num2+ ' é igual a: '+(num1/num2));//Divisão de valores    
console.log(`${num1} X ${num2} é igual a: ${(num1*num2)}`);//Multiplicação de valores dentro de um templateString
*/

//nomedavariavel.forEach(element =>{ codigo });
let num = 0;
for (let i = 0; i <= 10; i++){
  if (i % 2 == 0 ){
    for (num = 0; num <=10; num++){ 
    console.log(i+' x '+ num + ' = '+(num*i));
    }
    console.log('----------------------------------');   
}

};