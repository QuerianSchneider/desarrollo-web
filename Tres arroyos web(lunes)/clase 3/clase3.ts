import * as fs from 'readline-sync';

// declarar una variable

let numero1 : number = 3;
let numero2 : number = 5;

//reasignamos los valores

numero1 = 7;
numero2 = 10;

let resultado : number = numero1 + numero2;

let mensaje : string  = "El resultado de la suma es" + resultado;

console.log(mensaje);

//--------------------------------------------------------------------
//tipos de variables

//numerico

let iva:number=21;
let total:number=316.21;
//console.log

//area del rectangulo

let base:number=10;
let altura:number=5;

let areaDelRectangulo:number= base * altura;
console.log("El area del rectangulo es: " + areaDelRectangulo);

//interactuar con el usuaro readline-sync

let mensaje3:string=fs.question("Ingresar un mensaje: ");
console.log("El mensaje ingresado es : " + mensaje3);