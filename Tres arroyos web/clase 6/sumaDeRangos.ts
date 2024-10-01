import * as fs from "readline-sync";

console.log("Debe ingresar dos numeros enteros");

const initNumber:number=fs.questionInt("Ingrese el primer numero: ");
const endNumber:number=fs.questionInt("Ingrese el segundo numero: ");
let accum:number=0;
for(let i=initNumber;i<=endNumber; i++){
    accum=accum+1;
}
console.log(accum);

