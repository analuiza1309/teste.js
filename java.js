const input=require("readline-sync")

const Animal = input.question("Qual animal vai para arca de NoÈ?")

switch(Animal){

    case "vaca":
    case  "girafa": 
    case "leão":
    case  "passáro":
    case  "porco":

    console.log("Esse animal irà para arca de noè");
    break
     
    case "Dinoussauro":
        default:

            console.log("Esse animal não irà para arca de noè");
}            