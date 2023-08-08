//Exercício 1 laços

let perguntaSeQuerComerMais = prompt("Deseja comer mais coxinhas?").toLocaleLowerCase()
let soma = 0

while (perguntaSeQuerComerMais==="s") {
    soma=soma+2.50


    perguntaSeQuerComerMais = prompt("Deseja comer mais coxinhas?").toLocaleLowerCase()
    
}

console.log("O valor a ser pago de coxinhas consumidas é de R$", soma);
