import* as fs from 'readline-sync';

export function cargarArreglos(arreglo:number[],longitud:number):void{
longitud=fs.questionInt("Ingrese la longitud del arreglo: ");
arreglo=new Array(longitud);
    for(let i:number=0;i<6;i++){
        arreglo[i]=fs.questionInt("Ingrese un numero para el arreglo 1: ");
        }
}