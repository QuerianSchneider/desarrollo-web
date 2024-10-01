import * as fs from "readline-sync";

const ALTURA_MINIMA : number = 130;
let alturaPersona : number = fs.questionInt("Ingrese su altura en cm: ");

if(alturaPersona >= ALTURA_MINIMA ){
    console.log("usted puede subir!");
}else{
    console.log("Usted debe medir 130 cm o mas para subir");
}