import* as fs from "readline-sync";

const firstNum:number=fs.questionInt("Ingrese el numero que desea multiplicar: ")
const secondNum:number=fs.questionInt("Ingrese el numero por el que desea multiplicar el anterior numero");

for(let i:number=1; i<=secondNum; i++){
    const producto:number=i*firstNum;
    console.log()
}