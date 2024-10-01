"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("readline-sync");
// declarar una variable
var numero1 = 3;
var numero2 = 5;
//reasignamos los valores
numero1 = 7;
numero2 = 10;
var resultado = numero1 + numero2;
var mensaje = "El resultado de la suma es" + resultado;
console.log(mensaje);
//--------------------------------------------------------------------
//tipos de variables
//numerico
var iva = 21;
var total = 316.21;
//console.log
//area del rectangulo
var base = 10;
var altura = 5;
var areaDelRectangulo = base * altura;
console.log("El area del rectangulo es: " + areaDelRectangulo);
//interactuar con el usuaro readline-sync
var mensaje3 = fs.question("Ingresar un mensaje: ");
console.log("El mensaje ingresado es : " + mensaje3);
