var modelo = document.getElementById('modelo');
var placa = document.getElementById('placa');
var btnGravar = document.getElementById('gravar');
var btnLimpar = document.getElementById('limpar');
var table = document.getElementById('tabela');
var linhasTabela = document.getElementById('conteudo');
var conteudo = [];
var conteudoJSON;
var linhas = "";

btnGravar.addEventListener('click',function(){

conteudo.push({Modelo: modelo.value, Placa: placa.value});
conteudoJSON = JSON.stringify(conteudo);

localStorage.setItem('Cadastro de Carro',conteudoJSON);



conteudo.forEach((carro) => {

    linhas += `<tr>`
    linhas +=`<td>${carro.modelo}</td>`
    linhas +=`<td>${carro.placa}</td>`
    linhas +=` </tr>`
    
    });

    document.getElementById('conteudo').innerHTML = linhas;
});