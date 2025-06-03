var consultarCEP = document.getElementById('btn');
var inputCEP = document.getElementById('cep');
var inputLogradouro = document.getElementById('Logradouro');
var inputBairro = document.getElementById('Bairro');
var inputCidade = document.getElementById('Cidade');
var erro = document.getElementById('erro');
/*consultarCEP.addEventListener('click', async function(){
 let url = "https://viacep.com.br/ws/18136280/json";

 let response = await fetch(url);

 let cep = await response.json();

//let objCep = JSON.parse(cep);

console.log(cep.logradouro)

}); */


consultarCEP.addEventListener('click', async function(){
    erro.classList.remove('mostrar');
    erro.classList.add('esconder');
  let newCep = parseInt(inputCEP.value);
 let url = `https://viacep.com.br/ws/${newCep}/json`;

 let response = await fetch(url);

 console.log(response);
if (!response.ok){
    
    /*let cep = await response.json();

    inputLogradouro.value = cep.logradouro;
    inputBairro.value = cep.bairro;
    inputCidade.value = cep.localidade;*/
 

 } else{
    erro.classList.add('mostrar');
    erro.classList.remove('esconder');
    erro.innerHTML = "CPF invalido!";
 }

    let cep = await response.json();

    inputLogradouro.value = cep.logradouro;
    inputBairro.value = cep.bairro;
    inputCidade.value = cep.localidade;
    



});


function limpar(){
    inputBairro.value = "";
    inputCEP.value = "";
    inputCidade.value = "";
    inputLogradouro.value = "";
    console.clear();
}

  