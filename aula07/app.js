const pessoas = [
{id: 1, nome: 'João', idade: 25, sexo: 'M', salario: 1250.00},
{id: 2, nome: 'Maria', idade: 32, sexo: 'F', salario: 10500.00},
{id: 3, nome: 'Roberto', idade: 15, sexo: 'M', salario: 1297.00},
{id: 4, nome: 'Thales', idade: 23, sexo: 'M', salario: 980.90},
{id: 5, nome: 'Patricia', idade: 34, sexo: 'F', salario: 3020.00},
{id: 6, nome: 'Fernanda', idade: 29, sexo: 'F', salario: 4200.00},
]


//CASO, tu faça uma sentença com mais de uma linha utilizando forEach, map, filter, find é necessário usar o return

/*
For idealmente é usado para mostrar dados
for(let i = 0; i <pessoas.length; i++){
    const pessoa = pessoas[i];
    console.log(`Id: ${pessoa.id}, Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}`)
}
*/

/*
forEach
pessoas.forEach((varTemporaria) => console.log(varTemporaria.nome))
*/

//Map funciona como se fosse um filtro, assim podendo selecionar valores especificos e retorna-los em um novo array

//A ideia do map é para transformar valores em um novo array
const SalarioReajustado = pessoas.map((p) => p.salario + 1000) // p é um apelido
console.log(SalarioReajustado);
//A ideia do filter é literalmente filtrar
//CASO, tu faça uma sentença com mais de uma linha utilizando forEach, map, filter, find é necessário usar o return
const pessoaMaiorQue30 = pessoas.filter((qualquer) => {
    if (qualquer.idade>30){
        return qualquer;
    }})
console.log(pessoaMaiorQue30);

//Find retorna o primeiro valor que atende a requisição
const pessoaMenor30 = pessoas.find((qualquernome) => qualquernome.idade <= 30)
console.log (pessoaMenor30);

//Reduce percorre o array e faz a conta com diversos valores do array para retornar apenas um valor

// o ',0' é para passar um valor inicial que vai começar a soma e é importante que tenha
const SalarioTotal = pessoas.reduce((acumulador, objeto) => acumulador + objeto.salario, 0)
console.log(SalarioTotal)





