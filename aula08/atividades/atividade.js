var modelo = document.getElementById('modelo');
var placa = document.getElementById('placa');
var btnGravar = document.getElementById('gravar');
var btnLimpar = document.getElementById('limpar');
var table = document.getElementById('tabela');
var linhasTabela = document.getElementById('conteudo');
var conteudo = [];
var conteudoJSON;

var resultado;
btnGravar.addEventListener('click',function(){

var linhas = "";// Declarar essa var aqui Impede que o resultado duplique na tabela

conteudo.push({Modelo: modelo.value, Placa: placa.value}); // Insere os campos no array

conteudoJSON = JSON.stringify(conteudo); //Transforma o conteudo do array em string Json, e passa para a variavel conteudoJSON

localStorage.setItem('Cadastro de Carros', conteudoJSON);// Armazena o conteudo no local storage com a chave Cadastro de Carros


resultado = JSON.parse(localStorage.getItem('Cadastro de Carros')); // Pega os itens no Local Storage pela chave e transforma em objeto do JS

resultado.forEach((carro) => { // Mostra os valores no HTML
    linhas += `<tr>`
    linhas +=`<td>${carro.Modelo}</td>`
    linhas +=`<td>${carro.Placa}</td>`
    linhas +=` </tr>`
    });
    document.getElementById('conteudo').innerHTML = linhas;
});

btnLimpar.addEventListener('click', function(){
    modelo.value = "";
    placa.value = "";


});