import * as fs from "readline-sync";
const DESCUENTO : number = 0.1;
const MINIMO_COMPRA : number = 1000;
let precio : number = fs.questionInt("Ingrese el precio del producto: ");
let cantidad : number = fs.questionInt("Ingrese el precio del producto: ");
let totalDeCompra : number = precio * cantidad;

if (totalDeCompra > MINIMO_COMPRA) {
    let totalConDescuento : number = totalDeCompra* (1 - DESCUENTO);
    console.log("Felicitaciones! tenes un 10% de descuento ")
    }
