const input=require("readline-sync")

console.log("===Bem vinda ao meu cardapio Digital")
const produto = input.question("De qual produto desejar saber o preço?")

switch(produto){

   case"laranja":
       console.log("laranjua custa 30 centavos")
       break
       case "Manga":
       console.log("A Manga custa 3 reais")
       break
       case "mamão":
       console.log("O mamão custa 2,99")
       break
       case "limão":
       console.log("O limão custa 1 real")
       break
      default:
          console.log(" o temos fruta no nosso mercado")
}


