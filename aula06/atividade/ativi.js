/*
Atividade
Produto
    ID
    Descrição
    Tabela-valores [100.00, 150.00, 130.00]
    categorias ["Bebidas", "Mercearia"]

    com botão de gravar e exibir
*/
var idProduto = document.getElementById('id');
var descricao = document.getElementById('descricao');
var tValores = document.getElementById('t_valores');
var categorias = document.getElementById('categorias');
var btnCadastrar = document.getElementById('btnGravar');
var btnMostrar = document.getElementById('btnMostrar');
var chxMercearia = document.getElementById('merce');
var chxBebidas = document.getElementById('bebi');
var produto = {};
var Mostrar = document.getElementById('result');

btnCadastrar.addEventListener('click', salvarDados)
btnMostrar.addEventListener('click', mostrarDados)

function salvarDados(){
    produto.id = idProduto.value
    produto.descricao = descricao.value
    produto.categorias = [];
    if (tValores.value == "100"){
        produto.value = 100
    }
    if (tValores.value == "130"){
        produto.valor = 130
    }
    if (tValores.value == "150"){
        produto.valor = 150
    }

    if (chxBebidas.checked){
        produto.categorias.push(chxBebidas.value);
    }
    if (chxMercearia.checked){
        produto.categorias.push(chxMercearia.value);
    }
}
function mostrarDados(){
    Mostrar.innerHTML = `
        <p>ID: ${produto.id}</p>
        <p>Descrição: ${produto.descricao}</p>
        <p>Valor: ${produto.valor}</p>
        <p>Categorias: ${produto.categorias.join(", ")}</p>
    `
}
