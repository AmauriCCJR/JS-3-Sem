var grausC = document.getElementById('c');
var btnGrausC = document.getElementById('convertC');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var calcMaior = document.getElementById('verificaM');
var valor = document.getElementById('valor');
var btnValor = document.getElementById('btnValor');
var MostrarC = document.getElementById('mostrarC');
var MostrarM = document.getElementById('mostrarM');
var MostrarP = document.getElementById('mostrarP');


btnGrausC.addEventListener('click', function(){
    var celc = parseFloat(grausC.value);
    MostrarC.innerHTML = converterCemF(celc);
    MostrarC.style.color = "red";

});

calcMaior.addEventListener('click', function(){
    var maior1 = parseFloat(num1.value);
    var maior2 = parseFloat(num2.value);
    var maior3 = parseFloat(num3.value);

    MostrarM.innerHTML = mostrarMaior(maior1,maior2,maior3);
    MostrarM.style.color = "green";
});

btnValor.addEventListener('click', function(){
    var testarvalor = parseFloat(valor.value);
    MostrarP.innerHTML = calcularPorcentagem(testarvalor);
    MostrarP.style.color = "blue";
});

function converterCemF (celcius){
   return celcius = (celcius * 1.8) + 32;
}

function mostrarMaior(a,b,c){
    if (a > b && a > c){
        return (a+" é o maior");
    }
    if (b > a && b > c){
        return (b + " é o maior");
    }
    if (c > b && c > a ){
        return (c + " é o maior");
    }
    if (a == b && a > c){
        return (a+" é um valor repetido é o maior valor");
    }
    if (b == c && b > a){
        return (b+ " é um valor repetido é o maior valor");
    }
    if (a == b && a == c){
        return (a + " está repetido e é o unico valor");
    }

}

function calcularPorcentagem(porcem){
    if (porcem > 500){
        return ("13,5% desse valor é: "+porcem*0.135);
    }
    if (porcem < 500){
        return ("9,98% desse valor é: "+porcem*0.0998);
    }
    return -1;
}