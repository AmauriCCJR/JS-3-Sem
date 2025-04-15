const produtos = [
    {id: 1, nome: 'produto 1', preco: 10.2, categoria: 'C', estoque: -10},
    {id: 2, nome: 'produto 2', preco: 20.5, categoria: 'B', estoque: 1000},
    {id: 3, nome: 'produto 3', preco: 40.03, categoria: 'A', estoque: 1},
    {id: 4, nome: 'produto 4', preco: 54.10, categoria: 'B', estoque: 0},
    {id: 5, nome: 'produto 5', preco: 100.30, categoria: 'A', estoque: 90},
    {id: 6, nome: 'produto 6', preco: 9.99, categoria: 'C', estoque: 80}
];

/* For */

for (let i = 0; i < produtos.length; i++){
    let letraC = produtos[i];
    if (letraC.categoria == "C"){
        console.log(letraC);
    }
}
console.log('------------------------------------------------------------------------------------------------')

for (let i = 0; i < produtos.length; i++){
    let valormaior20 = produtos[i];
    if (valormaior20.preco > 20){
      var nomes = valormaior20;
      console.log (nomes)
    }
    
}
console.log('------------------------------------------------------------------------------------------------')

for (let i = 0; i < produtos.length; i++){
    let estoqueMaior0 = produtos[i];
    if (estoqueMaior0.estoque > 0){
      var NomesDoEstoque = estoqueMaior0;
      console.log (NomesDoEstoque)
    }
}
console.log('------------------------------------------------------------------------------------------------')

for (let i = 0; i < produtos.length; i++){
    let idPar = produtos[i];

    if (idPar.id % 2 == 0){
        let IDSpar = idPar;
        console.log (IDSpar);
    }
}
console.log('------------------------------------------------------------------------------------------------')
for (let i = 0; i < produtos.length; i++){
    let apenasA = produtos[i];
    let Resultado = [];
    if (apenasA.categoria == "A" && apenasA.estoque > 0){
        Resultado[i] = apenasA;
        console.log(Resultado[i]);
        break;
    }
}


/* forEach */


/* map  */


/* filter */


/* find */


/* reduce */

