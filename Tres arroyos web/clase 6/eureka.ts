import * as fs from "readline-sync";

const clave:string="eureka";
let userInput:string|null=null
let counter=0

console.log("Tienes 3 intentos para ingresar la clave")

while(counter <= 3 && userInput !==clave){
    userInput=fs.question("Ingrese la clave")
    
}