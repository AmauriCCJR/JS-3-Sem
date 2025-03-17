var nome = document.getElementById('nome');
var idade = document.getElementById('idade');
var cpf = document.getElementById('cpf');
var btn = document.getElementById('validar');
var m_nomeCTres = "Nome tem que ter mais de 3 letras!";
var m_nomeComposto = "Nome deve ser composto!";
var m_idadeMaior = "Idade tem que ser maior que 18 anos e menor que 60!";
var m_cpf = "CPF deve possuir 11 digitos!";
var campo = document.getElementById('campo');
var contErro = "";
var aviso = document.getElementById('aviso');





btn.addEventListener('click', function(){
contErro = "";
let indiceEspaco = nome.value.trim().indexOf(' '); //Verifica se tem espaço no nome
//.trim limpa os espaços das extremidades do nome
let Ncpf = cpf.value;
Ncpf = Ncpf.replaceAll('.','');//Troca todos caracteres com . com vazio
Ncpf = Ncpf.replaceAll('-', '');//Troca todos caracteres com - com vazio

if (nome.value == ''){
    contErro += 'Tem que ser digitado um nome!';
    nome.style.borderColor ='red';
}
if ((nome.value).length < 3){
    contErro += "\n" + m_nomeCTres;
    nome.style.borderColor ='red';
}
if(indiceEspaco == -1){
   nome.style.borderColor ='red';
   contErro += "\n" + m_nomeComposto; 
}

if (parseInt(idade.value) < 18 || parseInt(idade.value) > 60 || idade == ''){
    contErro += "\n" + m_idadeMaior;
    idade.style.borderColor ='red';
}
if (Ncpf.length !== 11 || Ncpf == ''){
    contErro += "\n" + m_cpf;
    cpf.style.borderColor ='red';
}
if (contErro == ""){
    aviso.textContent = "Sucesso!";
    campo.classList.add('esconder');
    campo.classList.remove('exibir');
    aviso.classList.remove('esconder');
    aviso.classList.add('exibir');
    aviso.style.backgroundColor ='rgb(5, 148, 24)';
    aviso.style.color = 'rgb(128, 221, 141)';
    nome.style.borderColor ='green';
    idade.style.borderColor ='green';
    cpf.style.borderColor ='green';
   
} else {
    campo.classList.remove('esconder');
    campo.classList.add('exibir');
    aviso.innerHTML = contErro.replace(/\n/g, '<br>');//Ajuda do Copilot
    aviso.classList.remove('esconder');
    aviso.classList.add('exbir');
}

});