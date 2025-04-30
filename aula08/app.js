const pessoas = [
    {id: 1, nome: 'João', idade: 25, sexo: 'M', salario: 1250.00},
    {id: 2, nome: 'Maria', idade: 32, sexo: 'F', salario: 10500.00},
    {id: 3, nome: 'Roberto', idade: 15, sexo: 'M', salario: 1297.00},
    {id: 4, nome: 'Thales', idade: 23, sexo: 'M', salario: 980.90},
    {id: 5, nome: 'Patricia', idade: 34, sexo: 'F', salario: 3020.00},
    {id: 6, nome: 'Fernanda', idade: 29, sexo: 'F', salario: 4200.00},
    ]
// var JsonOBJ = JSON.stringify(pessoas); //Transforma um objeto ou array de objetos JS em uma string JSON

// var ObjetoJS = JSON.parse(JsonOBJ);//Devolve a string Json ao formato de objeto JS

//                     //Chave, Valor
// localStorage.setItem("Materia", "Programação Sitios");

// //Para ler o valor, usa-se o getItem e marca o exato nome da chave
// var Materia = localStorage.getItem('Materia'); 

// //Para remover a string, basta usar o removeItem com a chave que tu quer remover
// localStorage.removeItem('Materia');

// localStorage.setItem("Faculdade", "Fatec São Roque");
// localStorage.setItem("Dia", "Segunda-Feira");

// localStorage.clear();
// //Clear limpa os valores das chaves, pode-se usar sem marcar nada, ou marcar o nome das chaves para limpar especificamente

var gravarJson = JSON.stringify(pessoas);
localStorage.setItem('Cadastro de Pessoas',gravarJson);

var PESSOASOBJ = JSON.parse(localStorage.getItem('Cadastro de Pessoas'));

console.log(PESSOASOBJ);

PESSOASOBJ.push({id:7, nome:'Jão', idade: 18, sexo: 'M', salario: 1900.80})//Add elementos ao array
var html = "";

PESSOASOBJ.forEach((pessoa) => {

html += `<tr>`
html +=`<td>${pessoa.id}</td>`
html +=`<td>${pessoa.nome}</td>`
html +=`<td>${pessoa.idade}</td>`
html +=`<td>${pessoa.sexo}</td>`
html +=`<td>${pessoa.salario}</td>`
html +=` </tr>`

});

document.getElementById('linhasTabela').innerHTML = html;