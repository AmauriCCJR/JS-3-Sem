var campo = document.getElementById('nome');
var btn = document.getElementById('validar');
var aviso = document.getElementById('aviso');
var msgGeral = document.getElementsByClassName('msg-geral')[0];// Pega o primeiro item que tem a classe '[0]'
//aviso.style.visibility= 'hidden';Deixa o elemento invisivel - porem ocupa espaço na tela
aviso.style.display = 'none'; //Deixa o elemento invisivel - porem não ocupa espaço na tela

btn.addEventListener('click', function(){
   if (campo.value == ''){
    //aviso.style.visibility = 'visible';Deixa o elemento visivel
    aviso.style.display = 'block'; // Deixa o elemento visivel novamente
    aviso.textContent = "Por favor digite o nome";
    aviso.style.color = 'red';
    campo.style.borderColor='red';//Muda o elemento como se fosse css
    console.log('Nome não informado! Por favor digite o nome');
    msgGeral.classList.remove('esconder');//Remove do elemento a classe esconder
    msgGeral.classList.add('exibir');//Adiciona ao elemento a classe exbir

   } else{
    
    campo.style.backgroundColor='white';
    campo.style.borderColor='blue';
    aviso.style.display = 'none';
    /* Se no if tiramos a classe esconder e adicionamos a classe exibir, 
    No else precisamos inverter para que quando o usuário digitar certo 
    a classe não fique aparecendo */
    msgGeral.classList.remove('exibir');
    msgGeral.classList.add('esconder');
    console.log('Seja bem vindo '+campo.value);
   }

});

