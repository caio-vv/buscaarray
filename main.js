const prompt = require('prompt-sync')()
let pergunta = prompt("digite um numero: ")
let contagem = 0
const arraypred = [1, 13, 45, 98, 12, 100, 33, 67, 99, 15]

arraypred.forEach((element, index) => {
    contagem++
    if (pergunta == element){
        console.log("o numero: " + element, "esta presente no indice: " + index)
        console.log(contagem)
        process.exit()
    }
    
});