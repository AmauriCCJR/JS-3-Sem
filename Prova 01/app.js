var aviso = document.getElementById('error');
var select = document.getElementById('opcao');
var identificar = document.getElementById('verificar');
var contaC = document.getElementById('contaC');
var nomecontaC = document.getElementById('nomecontac');
var saldocontaC = document.getElementById('saldocontac');
var limitecontaC = document.getElementById('limitecontac');
var cpfcontaC = document.getElementById('cpfcontac');
var btnC = document.getElementById('btncontac');
var contaP = document.getElementById('contaP');
var nomecontaP = document.getElementById('nomecontap');
var saldocontaP = document.getElementById('saldocontap');
var cpfcontaP = document.getElementById('cpfcontap');
var btnP = document.getElementById('btncontap');
var contaS = document.getElementById('contaS');
var nomeempresacontaS = document.getElementById('nomeempresacontas');
var nomecontaS = document.getElementById('nomecontas');
var saldocontaS = document.getElementById('saldocontas');
var cpfcontaS = document.getElementById('cpfcontas');
var btnS = document.getElementById('btncontas');
var aviso2 = document.getElementById('error2');
var aviso3 = document.getElementById('error3');
var aviso4 = document.getElementById('error4');



identificar.addEventListener('click', function(){
    if (select.value == "cc"){
        contaC.classList.add('mostrar');
        contaC.classList.remove('esconder');
        contaP.classList.add('esconder');
        contaP.classList.remove('mostrar');
        contaS.classList.add('esconder');
        contaS.classList.remove('mostrar');
    }
    if (select.value == "cp"){
        contaP.classList.add('mostrar');
        contaP.classList.remove('esconder');
        contaC.classList.add('esconder');
        contaC.classList.remove('mostrar');
        contaS.classList.add('esconder');
        contaS.classList.remove('mostrar');
    }
    if (select.value == "cs"){
        contaS.classList.add('mostrar');
        contaS.classList.remove('esconder');
        contaC.classList.add('esconder');
        contaC.classList.remove('mostrar');
        contaP.classList.add('esconder');
        contaP.classList.remove('mostrar');
    }
});

btnC.addEventListener('click', function(){

aviso.innerHTML = verificaNomeComposto(nomecontaC);
aviso2.innerHTML = verificaCampoVazio(saldocontaC);
aviso3.innerHTML = verificaLimiteCredito(limitecontaC, saldocontaC);
aviso4.innerHTML = verificaCPF(cpfcontaC);

if (aviso == true){
    nomecontaC.style.borderColor = 'green';
    aviso.classList.add('esconder');
}
if (aviso !== "true"){
    nomecontaC.style.borderColor = 'red';
}
if (aviso2 == true){
    saldocontaC.style.borderColor = 'green';
    aviso2.classList.add('esconder');
}
if (aviso2 !== true){
    saldocontaC.style.borderColor = 'red';
}
if (aviso3 == true){
    limitecontaC.style.borderColor = 'green';
    aviso3.classList.add('esconder');  
}
if (aviso3 !== true){
    limitecontaC.style.borderColor = 'red';
}
if (aviso4 == true){
    cpfcontaC.style.borderColor = 'green';
    aviso4.classList.add('esconder');
}
if (aviso4 !== true){
    cpfcontaC.style.borderColor = 'red';
}

if (aviso == true && aviso2 == true && aviso3 == true && aviso4 == true){
    aviso.innerHTML = "Sucesso!";
    aviso2.innerHTML = "Sucesso!";
    aviso3.innerHTML = "Sucesso!";
    aviso4.innerHTML = "Sucesso!";
}
});




function verificaNomeComposto (nome){
    /*nome = nome.value.trim().indexOf('');*/
    if ( nome.value == ""){
        return "<br>O nome não foi digitado";
    } else {
         return true;
    }
}

function verificaCampoVazio(valor){
    if (valor.value == ""){
        return "<br>Por favor digite um salario inicial";
    } else {
        return true;
    }
}
function verificaLimiteCredito(limite, saldo){
    if (parseFloat(limite.value) > parseFloat(saldo.value) || limite.value == " "){
        return "<br> O Valor do limite não pode ser maior que o do saldo";
    } else {
        return true;

    }
}
function verificaCPF(cpf){
    if (cpf.value.length !== 11 || cpf === ""){
        return "<br> Por favor digite um CPF valido";
    } else {
        return true;
    }
}