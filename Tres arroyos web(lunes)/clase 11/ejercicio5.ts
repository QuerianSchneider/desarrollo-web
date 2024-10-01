import* as fs from 'readline-sync';

let longitud:number=fs.questionInt("Ingrese la longitud del arreglo: ");

let positivos:number=0;
let negativos:number=0;
let ceros:number=0;
let arreglosNumeros:number[]=new Array(longitud);

for(let i:number=0; i<longitud;i++){
    arreglosNumeros[i]=fs.questionInt("ingrese un numero para el arreglo: ")
if(arreglosNumeros[i]>0){
    positivos++
}else if(arreglosNumeros[i]<0){
    negativos++
}else{
    ceros++
}
}
console.log(`Hay ${positivos} positivos, ${negativos} negativos, ${ceros} ceros.`);
