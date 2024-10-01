//Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario. 
//Al final debe imprimir los valores por consola

import* as fs from 'readline-sync';

let nombres:string[]=new Array(2);

let numeros:number[]=new Array(3);

for(let i:number=0; i< nombres.length ; i++){
nombres[i]=fs.question("Ingrese el nombre que desee: ");
}
console.log(nombres);

console.log("-------------------------------------------------------------")

for(let i:number=0; i<numeros.length; i++){
numeros[i]=fs.questionInt("Ingrese el numero que desee: ");
}
console.log(numeros);