let par1 = document.getElementById('p1');
let par2 = document.getElementById('p2');
let par3 = document.getElementById('p3');
var txt = document.getElementById('txt');
var txt2 = document.getElementById('txt2');


//console.log(par1);
//console.log(par2.textContent); - Mostra o conteudo escrito da variavel
/*
let paragrafos = document.getElementsByTagName('p'); - Pega todos os paragrafos com a tag 'p'
console.log(paragrafos); - mostra todos os paragrafos em "forma" de array
console.log(paragrafos[0].textContent); - Le o conteudo do paragrafo na posição marcada entre []
let classeP = document.getElementsByTagName ('p-teste'); - Pega todos os elementos que possuem essa classe
*/
//querySelector pode obter qualquer elemento, mas dependendo tem uma condição a ser anotada
let TagP = document.querySelector('p'); //Seleciona uma classe 
let IdP = document.querySelector('#p1'); //Seleciona um id e necessita de um #
let ClassP = document.querySelector('.p-teste');//Seleciona uma classe, sendo necessária o . antes da classe
//Se quiser verificar se um elemento foi pego, tu pode usar if (nomeVariavel != null)
//O querySelector SEMPRE vai trazer o primeiro elemento que atende ao requisito
var btn = document.getElementById('botao');
btn.addEventListener('click', function(){
    //console.log("clicou"); - verificar se o click está funcionando
    //alert('Você clicou'); - verificar se o click está funcionando
    /*
    console.log(par3.textContent);
    par3.textContent = par1.textContent;//Troca o conteudo do paragrafo 3 pelo do paragrafo um
    par1.textContent = "Você trocou o conteudo desse texto"; //Muda o texto do paragrafo 1
    par2.textContent = par1.textContent + ' - ' + par3.textContent;//Mesclando o conteudo
    par1.textContent = txt.value;//para "pegar" o conteudo do input, é necessário usar o .value após a variavel */
    let resultado = parseInt(txt.value) + parseInt(txt2.value); 
    //parseInt transforma string em int, existe tbm o parse float que faz a mesma coisa para float
    console.log(resultado);



});






