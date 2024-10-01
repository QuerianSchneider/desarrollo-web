import * as fs from "readline-sync";

const usuario:string="juan";
const clave:string="claveJuan";

const intentosMaximos:number=3;
let intentos:number=0;

console.log("Tienes 3 intentos para iniciar sesion");

while(intentos < intentosMaximos){
    const usuarioIngresado:string=fs.question("Ingrese su usuario: ");
const claveIngresada:string=fs.question("Ingrese su clave: ");
if(usuarioIngresado===usuario && claveIngresada===clave) {
    console.log("Ha iniciado sesion correctamente");
    break;
}else{
    intentos++
    console.log(`Usuario o clave incorrectos. Intentos restantes: ${intentosMaximos-intentos}`);
}
}

if(intentos===intentosMaximos){
    console.log("Has alcanzado el numero maximo de intentos. Acceso denegado")
}