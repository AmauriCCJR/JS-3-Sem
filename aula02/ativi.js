var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var mais = document.getElementById('mais');
var menos = document.getElementById('menos');
var multi = document.getElementById('multi');
var divi = document.getElementById('divi');
var resultado = 0;

mais.addEventListener('click', function(){
    resultado = parseFloat(v1.value) + parseFloat(v2.value);
    alert("O resultado do seu calculo é: "+resultado);
});
menos.addEventListener('click', function(){
    resultado = parseFloat(v1.value) - parseFloat(v2.value);
    alert("O resultado do seu calculo é: "+resultado);
});
multi.addEventListener('click', function(){
    resultado = parseFloat(v1.value) * parseFloat(v2.value);
    alert("O resultado do seu calculo é: "+resultado);
});
divi.addEventListener('click', function(){
    resultado = parseFloat(v1.value) / parseFloat(v2.value);
    alert("O resultado do seu calculo é: "+resultado);
});

