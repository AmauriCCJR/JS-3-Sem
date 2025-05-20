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
let idCarro = incremental();

if(PlacaJaExiste(placa.value.toUpperCase())){
    console.log('A placa '+ placa.value + ' ja existe');
    return;
}



    conteudo.push({
    id: idCarro,
    Modelo: modelo.value.toUpperCase(), 
    Placa: placa.value.toUpperCase()}); // Insere os campos no array

conteudoJSON = JSON.stringify(conteudo); //Transforma o conteudo do array em string Json, e passa para a variavel conteudoJSON

localStorage.setItem('Cadastro de Carros', conteudoJSON);// Armazena o conteudo no local storage com a chave Cadastro de Carros
localStorage.setItem('identity', idCarro);

resultado = JSON.parse(localStorage.getItem('Cadastro de Carros')); // Pega os itens no Local Storage pela chave e transforma em objeto do JS





resultado.forEach((carro) => { // Mostra os valores no HTML
    linhas += `<tr>`
    linhas += `<td> ${carro.id}</td>`
    linhas +=`<td>${carro.Modelo}</td>`
    linhas +=`<td>${carro.Placa}</td>`
    linhas += `<td><button onClick="excluir(${carro.id})" data-id="${carro.id}">Excluir</button> </td>`
    linhas +=` </tr>`
    });
    document.getElementById('conteudo').innerHTML = linhas;

    limparcampos();
});

btnLimpar.addEventListener('click', function(){
limparcampos();

});



function limparcampos(){
    modelo.value = "";
    placa.value = "";
}
function PlacaJaExiste(placas){
    let placas = JSON.parse(localStorage.getItem("Cadastro de Carros"));
    if (placas == null)  return false;

    let placaEncontrada = placas.find((carros) => carros.placa == placas);
    return placaEncontrada ? true : false;
}

function incremental(){
    let identity = localStorage.getItem('identity');
    if (identity == null){
        identity = 0;
    } else {
        identity = parseInt(identity);
    }
    return identity += 1;

}

function excluir(id){
    let carros = JSON.parse(localStorage.getItem('Cadastro de Carros'));
    let novoArray = carros.filter((carro)=> carro.id != id);

    localStorage.setItem('Cadastro de Carros', JSON.stringify(novoArray));

    

}
