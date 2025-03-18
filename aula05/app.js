var num = document.getElementById('num');
var btn = document.getElementById('btn');
var result = document.getElementById('resultado');
var num2 = document.getElementById('num2');
var btn2 = document.getElementById('btn2');
var result2 = document.getElementById('resultado2');

btn.addEventListener('click', function(){
    var numero = parseInt(num.value);
    result.innerHTML = vericarparimpar(numero);
});

btn2.addEventListener('click', function(){
    var numero2 = parseInt(num2.value);
    result2.innerHTML = executaoperacao(numero2);
});

//Chama a função, o nome dela sendo bem descritivo, e depois coloca um nome qualquer como parametro
//Funções devem ter no maximo 20 linhas (idealmente)
//Funções devem resolver apenas 1 problema
//Return é executado apenas uma vez
function vericarparimpar(numero){
    if (numero % 2 == 0){
        return 'é par';
    } else {
        return 'é impar';
    }
}
//Verifica se o valor é impar
function ehimpar (n){
    return (n % 2 != 0);
}
//Verifica se o valor é par ou impar, e se for par soma o valor + 10, se for impar mostra -1
function executaoperacao(n1){
    if (ehimpar(n1)){
        return -1;
    }
        return somadoisnumeros(n1, 10);
}
//Função Somar dois valores
function somadoisnumeros(a,b){
    return a+b;
}


