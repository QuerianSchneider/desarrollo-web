import* as fs from 'readline-sync';
import {cargarArreglos} from './funciones';

let longitud:number=fs.questionInt("Ingrese la longitud del arreglo: ")
let arr1:number[]=new Array(longitud);
let arr2:number[]=new Array(longitud);
let sumArr:number[]=new Array(longitud);

for(let i:number=0;i<6;i++){
arr1[i]=fs.questionInt("Ingrese un numero para el arreglo 1: ");
}

for(let i:number=0;i<6;i++){
arr2[i]=fs.questionInt("Ingrese un numero para el arreglo 2: ");
}

for(let i:number=0;i<6;i++){
    sumArr[i]= arr1[i]+arr2[i]
    console.log(sumArr);
}
cargarArreglos(arr1,longitud);
cargarArreglos(arr1,longitud);
