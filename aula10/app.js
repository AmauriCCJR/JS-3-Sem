 var inputNome = document.getElementById('nome');
 var inputSexo = document.getElementById('sexo')
 var inputStatus = document.getElementById('status');
 var idPessoa = 0;
 var btnEnviar = document.getElementById('cad');
 var btnLimpar = document.getElementById('send');
 var btnReset = document.getElementById('reset');
 var linhasTabela = document.getElementById('conteudo');
 var pessoas = [];
 var conteudoJson;
 var erroHtml = document.getElementById('erros');
 var erros = "";
 var resultado;

btnEnviar.addEventListener('click', function(){

var linhas = "";
var incremento = incremental(); 
erros = "";

if (inputNome.value == ""){
    erros += 'Digite um nome!'
    
}
if (inputSexo.value == ""){
    erros += '<br>Selecione um Sexo valido!';
    
}
if (inputStatus.value == ""){
    erros += '<br>Selecione um status valido!'
    
}
if (erros != ""){
erroHtml.classList.remove('esconder');
erroHtml.classList.add('mostrar');

erroHtml.innerHTML = erros;
inputStatus.style.borderColor = 'red';
inputSexo.style.borderColor = 'red';
inputNome.style.borderColor = 'red';
}
if (erros == "") {

    inputStatus.style.borderColor = 'green';
    inputSexo.style.borderColor = 'green';
    inputNome.style.borderColor = 'green';
    erroHtml.classList.remove('mostrar');
    erroHtml.classList.add('esconder');


if (PessoaJaCadastrada(inputNome.value.toUpperCase())){
    alert('Essa Pessoa ja está cadastrada!');
    return;
}

 pessoas.push({
    idPessoa: incremento,
    Nome: inputNome.value.toUpperCase(),
    Sexo: inputSexo.value.toUpperCase(),
    Status: inputStatus.value.toUpperCase()
 });

 conteudoJson = (JSON.stringify(pessoas));
 localStorage.setItem('Pessoas', conteudoJson);
 localStorage.setItem('ID', incremento);
 
 resultado = JSON.parse(localStorage.getItem('Pessoas'));




limpar();
carregarPessoas();
}

});

btnLimpar.addEventListener('click', limpar);

btnReset.addEventListener('click', function(){
localStorage.clear();
pessoas = [];
limpar();
carregarPessoas();
});




//Funções aqui para baixo

function incremental(){
    let indice = localStorage.getItem('ID');

    if (indice == null){
        indice = 0;
    } else {
        indice = parseInt(indice);
    }
    return indice + 1;
}

function PessoaJaCadastrada(p){
    let pessoaNaoAchada = JSON.parse(localStorage.getItem('Pessoas'));
    if (pessoaNaoAchada == null){
        return false;
    }

    let PessoaAchada = pessoas.find((Item) => Item.Nome === p);
    return PessoaAchada ? true : false;
}

function limpar(){
    inputNome.value = "";
    inputSexo.value = "";
    inputStatus.value = "";
}

function excluir(id){
    let pPessoas = JSON.parse(localStorage.getItem('Pessoas')) || [];
    let novoCadastroPessoa = pPessoas.filter((item) => item.idPessoa != id);
    localStorage.setItem('Pessoas', JSON.stringify(novoCadastroPessoa));
    carregarPessoas();
}

function editar(id){
    let edit = JSON.parse(localStorage.getItem('Pessoas')) || [];
    let newEdit = edit.filter((newPessoa)=> newPessoa.idPessoa == id)

    inputNome.value = newEdit.Nome;

}



function carregarPessoas() {
    let sPessoa = localStorage.getItem('Pessoas');
   if (sPessoa){
    var cadPessoa = JSON.parse(sPessoa);
   } else {
    var cadPessoa = [];
   }
    let linhas = "";

    cadPessoa.forEach((PessoaCad) => {
        linhas += `<tr>`;
        linhas += `<td>${PessoaCad.idPessoa}</td>`;
        linhas += `<td>${PessoaCad.Nome}</td>`;
        linhas += `<td>${PessoaCad.Sexo}</td>`;
        linhas += `<td>${PessoaCad.Status}</td>`;
        linhas += `<td><button class="btn btn-danger" onClick="excluir(${PessoaCad.idPessoa})">Excluir</button></td>`;
        linhas += `<td><button class="btn btn-info" onClick="editar(${PessoaCad.idPessoa})">Editar</button></td>`
        linhas += `</tr>`;
    });

    linhasTabela.innerHTML = linhas;
}
carregarPessoas();
