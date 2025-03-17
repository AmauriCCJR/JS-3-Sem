var nome = document.getElementById('nome');
var fisico = document.getElementById('fisico');
var juridico = document.getElementById('juridico');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var cpf = document.getElementById('cpf');
var rg = document.getElementById('rg');
var idade = document.getElementById('idade');
var cnpj = document.getElementById('cnpj');
var ie = document.getElementById('ie');
var nomeF = document.getElementById('nomeF');
var formF = document.getElementById('formF');
var formJ = document.getElementById('formJ');
var escolher = document.getElementById('escolha');
var campoF = document.getElementById('campoF');
var campoJ = document.getElementById('campoJ');
var msF = document.getElementById('msF');
var msJ = document.getElementById('msJ');
var contErro = "";
var btnPesquisa = document.getElementById('pesquisar');
var option = document.getElementById('opcoes');


btnPesquisa.addEventListener('click', function(){
    //Mostrar cadastro de Pessoa Fisica
    if (option.value == "fisico"){
        formF.classList.remove('esconder');
        formF.classList.add('exibir');
        formJ.classList.remove('exibir');
        formJ.classList.add('esconder');
       
    } //Mostrar cadastro de Pessoa Juridica
    if (option.value == "juridico"){
        formJ.classList.remove('esconder');
        formJ.classList.add('exibir');
        formF.classList.remove('exibir');
        formF.classList.add('esconder');
    }
});
//Cadastro de Pessoa Fisica
btn1.addEventListener('click', function(){
        contErro = "";
        nome.style.borderColor = "black";
        cpf.style.borderColor = "black";
        rg.style.borderColor = "black";
        idade.style.borderColor = "black";
        let Ncpf = cpf.value;
        Ncpf = Ncpf.replaceAll('.','');
        Ncpf = Ncpf.replaceAll('-', '');
        let Nrg = rg.value;
        Nrg = Nrg.replaceAll('.','');
        Nrg = Nrg.replaceAll('-', '');
    
    if (nome.value == ""){
        contErro += "Por favor digite um nome";
        nome.style.borderColor = "red";
        
    }
    if (cpf == "" || Ncpf.length !== 11){
        contErro += "<br> O cpf deve ter 11 digitos";
        cpf.style.borderColor = "red";
        
       
    }
    if (rg == "" || Nrg.length !== 9){
        contErro += "<br>O RG deve ter 9 digitos";
        rg.style.borderColor = "red";
        
    }
    if (idade.value == "" || parseInt(idade.value) < 18){
        contErro += "<br> Idade deve ser maior que 18 anos";
        idade.style.borderColor = "red";
       
        
    }
    if (contErro == ""){
        msF.textContent = "Sucesso!";
        msF.classList.add('exibir');
        msF.classList.remove('esconder');
        msF.style.backgroundColor = "green";
        nome.style.borderColor = "green";
        cpf.style.borderColor = "green";
        rg.style.borderColor = "green";
        idade.style.borderColor = "green";
        msF.style.color = "white";
    } else {
        msF.classList.add('exibir');
        msF.classList.remove('esconder');
        msF.innerHTML = contErro;
        msF.style.backgroundColor = "red";
        msF.style.color = "white";
    }


});
//Cadastro de Pessoa Juridica
btn2.addEventListener('click', function(){
    contErro = "";
    let Ncnpj = cnpj.value;
    Ncnpj = Ncnpj.replaceAll('.', '');
    Ncnpj = Ncnpj.replaceAll('/','');
    Ncnpj = Ncnpj.replaceAll('-','');
    let Nie = ie.value;
    Nie = Nie.replaceAll('.', '');
    Nie = Nie.replaceAll('/','');
    Nie = Nie.replaceAll('-','');
    nome.style.borderColor = "black";
    cnpj.style.borderColor = "black";
    ie.style.borderColor = "black";
    nomeF.style.borderColor = "black";


    if (nome.value == ""){
        contErro += "Por favor digite um nome";
        nome.style.borderColor = "red";
        
    }
    if (cnpj == "" || Ncnpj.length != 14){
        contErro += "<br> O CNPJ deve conter 14 digitos";
        cnpj.style.borderColor = "red";
    }
    if (ie == "" || Nie.length != 12){
        contErro += "<br> A inscrição Estadual deve conter 12 digitos!";
        ie.style.borderColor = "red";
    }
    if (nomeF.value == ""){
        contErro += "<br> Por favor digite o nome da sua empresa!";
        nomeF.style.borderColor = "red";
    }
    if (contErro == ""){
        msJ.textContent = "Sucesso!";
        msJ.style.backgroundColor = "green";
        msJ.style.color = "white";
        msJ.classList.add('exibir');
        msJ.classList.remove('esconder');
        nome.style.borderColor = "green";
        cnpj.style.borderColor = "green";
        ie.style.borderColor = "green";
        nomeF.style.borderColor = "green";
    } else {
        msJ.innerHTML = contErro;
        msJ.style.backgroundColor = "red";
        msJ.style.color = "white";
        msJ.classList.add('exibir');
        msJ.classList.remove('esconder');
    }
});

