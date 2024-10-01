import* as fs from 'readline-sync';

let dimension:number=fs.questionInt("Ingrese la longitud del arreglo: ");

function cargarArreglo(arreglo:number[]):void{
    for(let i:number=0;i<arreglo.length;i++){
        arreglo[i]=fs.questionInt("Ingrese un numero: ");

    }
}
function calcularProductosEscalar(arreglo1:number[],arreglo2:number[]):number{
    let producto:number=0;
    for(let i:number=0;i<arreglo1.length;i++){
        producto=producto+(arreglo1[i]*arreglo2[i])
    }
    return producto;
}

let arr1:number[]=new Array(dimension);
let arr2:number[]=new Array(dimension);

cargarArreglo(arr1);
cargarArreglo(arr2);
let calcProdEsc:number=calcularProductosEscalar(arr1,arr2);
console.log(calcularProductosEscalar(arr1,arr2));

