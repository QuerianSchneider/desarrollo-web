import* as fs from 'readline-sync';

let LectorDeBrain:number=fs.questionFloat("Piense un numero del 1 al 10 e ingreselo: ");
if(LectorDeBrain<= 10){
console.log("Inicializando analisis cerebral...");

console.log("....");

console.log("Analisis completo.");

console.log(`Usted estaba pensando en el numero ${LectorDeBrain}`);
}else{
    console.log("Debe ingresar un numero del 1 al 10");
}
