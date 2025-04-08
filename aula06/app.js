/* Criação de um objeto 
var pessoa = {
    nome: "João",
    idade:20,
    altura:1.80,
    salario: 10000,
    casado:true,
    conhecimento:[
        "php", "js", "java"
    ]
};

//console.log(pessoa) - Mostra todos os campos do objeto
//console.log(pessoa.nome) - Mostra o campo nome dentro da objeto pessoa

console.log(`Nome: ${pessoa.nome} - idade: ${pessoa.idade}`);

var salarioNovo  = pessoa.salario + 500;
//Ou da para usar console.log(pessoa.salario + 500)

 console.log (`O salario dele com reajuste é de: ${salarioNovo}`);

 */
var nomePessoa = document.getElementById('nome');
var idadePessoa = document.getElementById('idade');
var alturaPessoa = document.getElementById('altura');
var casadoPessoa =  document.getElementById('casado');
var salarioPessoa = document.getElementById('salario')
var chxPHP = document.getElementById('php');
var chxJS= document.getElementById('js');
var chxCsharp = document.getElementById('csharp');
var btn = document.getElementById('enviar');
var exibir = document.getElementById('exibir');
var resultado = document.getElementById('resultado');
var pessoa = {}//Objeto

btn.addEventListener('click', function(){
carregarObjeto(pessoa);
console.log(pessoa);

});

exibir.addEventListener('click', exibirCadastro);

function exibirCadastro(){
    resultado.innerHTML = `
    <p>Nome: ${pessoa.nome}</p>
    <p>Idade: ${pessoa.idade}</p>
    <p>Altura: ${pessoa.altura}</p>
    <p>Salario: ${pessoa.salario}</p>
    <p>Casado: ${pessoa.casado}</p>
    <p>Conhecimentos: ${pessoa.conhecimentos.join(", ")}</p>
    
    
    
    `
}

function carregarObjeto(){
    pessoa.nome = nomePessoa.value
    pessoa.idade = parseInt(idadePessoa.value)
    pessoa.altura = parseFloat(alturaPessoa.value)
    pessoa.salario = parseFloat(salarioPessoa.value)

    if (casadoPessoa == "sim"){
        pessoa.casado = true;
    } else {
        pessoa.casado = false;
    }

    pessoa.conhecimentos = [];//O comando push TEM que ser atribuido a um array, e não a um elemento

    if (chxPHP.checked){
        pessoa.conhecimentos.push(chxPHP.value);
    }
    if (chxCsharp.checked){
        pessoa.conhecimentos.push(chxCsharp.value);
    }
    if (chxJS.checked){
        pessoa.conhecimentos.push(chxJS.value);
    }
}
