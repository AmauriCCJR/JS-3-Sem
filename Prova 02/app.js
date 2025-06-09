var inputNome = document.getElementById('nome');
var inputValor = document.getElementById('valor')
var inputEstoque = document.getElementById('estoque');
var idProduto = 0;
var btnCadastro = document.getElementById('cad');
var btnLimpar = document.getElementById('send');
var btnReset = document.getElementById('reset');
var linhasTabela = document.getElementById('conteudo');
var produtos = [];
var conteudoJson;
var erroHtml = document.getElementById('erros');
var erros = "";
var resultado;


btnCadastro.addEventListener('click', function(){
    erros = "";
    let incremento = incremental();
if (inputNome.value == ""){
    erros += 'Digite um nome para o produto!'
    
}
if (inputValor.value == "" || inputValor < 0){
    erros += '<br>Digite um valor valido!';
    
}
if (inputEstoque.value == ""){
    erros += '<br>Digite um estoque inicial para o produto!'
    
}
if (erros != ""){
erroHtml.classList.remove('esconder');
erroHtml.classList.add('mostrar');

erroHtml.innerHTML = erros;
inputNome.style.borderColor = 'red';
inputValor.style.borderColor = 'red';
inputEstoque.style.borderColor = 'red';
}
if (erros == "") {

    inputNome.style.borderColor = 'green';
    inputValor.style.borderColor = 'green';
    inputEstoque.style.borderColor = 'green';
    erroHtml.classList.remove('mostrar');
    erroHtml.classList.add('esconder');


    produtos.push({
        idProduto: incremento,
        Titulo: inputNome.value.toUpperCase(),
        Valor: inputValor.value.toUpperCase(),
        Estoque: inputEstoque.value.toUpperCase()
     });
    
     conteudoJson = (JSON.stringify(produtos));
     localStorage.setItem('Produtos', conteudoJson);
     localStorage.setItem('ID', incremento);
     
     resultado = JSON.parse(localStorage.getItem('Produtos'));

     limpar();
     carregarProdutos();

}

});

btnLimpar.addEventListener('click',limpar);
btnReset.addEventListener('click', function(){
    localStorage.clear();
    produtos = [];
    limpar();
    carregarProdutos();

});

//Funções
function incremental(){
    let indice = localStorage.getItem('ID');
    if (indice == null){
        indice = 0;
    } else {
        indice = parseInt(indice);
    }
    return indice + 1;
}

function limpar(){
    inputNome.value = "";
    inputValor.value = "";
    inputEstoque.value = "";
}

function Editar(id){
    let ProdutoInicial = JSON.parse(localStorage.getItem('Produtos')) || [];
    let ProdutoZerado = ProdutoInicial.filter((produtoZ) => produtoZ.idProduto == id);

    ProdutoZerado.forEach((item)=> {
        inputNome.value = item.Titulo;
        inputValor.value = item.Valor;
        inputEstoque.value = item.Estoque;
    
    });



    carregarProdutos();
}

function ZerarEstoque(id){
    let ProdutoInicial = JSON.parse(localStorage.getItem('Produtos')) || [];
    let ProdutoZerado = ProdutoInicial.filter((produtoZ) => produtoZ.idProduto == id);

    ProdutoZerado.forEach((item) => {
        item.Estoque = 0;
    });
    


    localStorage.setItem('Produtos', JSON.stringify(ProdutoInicial));
    carregarProdutos();
}


function carregarProdutos() {
    let nProduto = localStorage.getItem('Produtos');
   if (nProduto){
    var ListaProduto = JSON.parse(nProduto);
   } else {
    var ListaProduto = [];
   }
    let linhas = "";

    ListaProduto.forEach((ProdutoCad) => {
        if (ProdutoCad.Estoque > 0){
        linhas += `<tr class="checkMaior">`;
        }
        if(ProdutoCad.Estoque == 0){
            linhas += `<tr class="checkIgual">`;
        }
        if (ProdutoCad.Estoque < 0){
            linhas += `<tr class="checkMenor">`;
            }
        linhas += `<td>${ProdutoCad.idProduto}</td>`;
        linhas += `<td>${ProdutoCad.Titulo}</td>`;
        linhas += `<td>R$${ProdutoCad.Valor}</td>`;
        linhas += `<td>${ProdutoCad.Estoque}</td>`;
        linhas += `<td><button class="btn btn-info" onClick="Editar(${ProdutoCad.idProduto})">Editar</button></td>`;
        linhas += `<td><button class="btn btn-danger" onClick="ZerarEstoque(${ProdutoCad.idProduto})">Zerar Estoque</button></td>`
        linhas += `</tr>`;
    });

    linhasTabela.innerHTML = linhas;
}

function verificarEstoque(){
    
}
carregarProdutos();





