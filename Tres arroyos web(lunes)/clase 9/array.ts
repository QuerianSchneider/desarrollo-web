import* as fs from 'readline-sync';

/*let arreglo1:number[]= new Array(5);

arreglo1[0]=1;
arreglo1[0]=52;
arreglo1[0]=16;
arreglo1[0]=21;
arreglo1[0]=10;
console.log(arreglo1);*/

let meses:string[]=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];

let nroMes:number=fs.questionInt("Ingrese el numero del mes: ");

let index:number= nroMes -1;

console.log(`El mes que eligio es ${meses[index]}`);
