var conteudo = document.getElementById('conteudo');
var btnSearch = document.getElementById('btnSearch');
var API = `https://appwll.com.br/api/funcionarios`;
var inputNome = document.getElementById('nome');
var inputPrivilegio = document.getElementById('privi');
var inputID = document.getElementById('idCad');


btnSearch.addEventListener('click', async function(){

    let response = await fetch(API);
    let apiJson = await response.json();
    
carregarFuncionarios();

});


//Puxando Dados diretamente da API para a tela
async function carregarFuncionarios() {
    let response = await fetch(API);
    let apiJson = await response.json();
    let linhas = "";

    apiJson.forEach((clt) => {
        linhas += `<tr>`;
        linhas += `<td>${clt.id}</td>`;
        linhas += `<td>${clt.nome}</td>`;
        linhas += `<td>${clt.privilegio_id}</td>`;
        linhas += `<td>${clt.privilegio}</td>`;
        linhas += `<td><button class="btn btn-info" onClick="editar(${clt.id})">Editar</button></td>`;
        linhas += `<td><button class="btn btn-danger" onClick="excluir(${clt.id})">Excluir</button></td>`;
        linhas += `</tr>`;
    });

    conteudo.innerHTML = linhas;
}
//Deletando diretamente da API
async function excluir(id){
    let deleteFromAPI = `https://appwll.com.br/api/funcionarios/${id}`;
    deleteFromAPI = await fetch(deleteFromAPI,{
        method:'DELETE'
    })
    
    carregarFuncionarios();

    
}


