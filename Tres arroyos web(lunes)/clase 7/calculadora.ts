import * as fs from 'readline-sync';

let i: number;
let linea: string;
let numero1 :number = fs.questionInt("Ingrese el primer valor: ");
let numero2 :number = fs.questionInt("Ingrese el segundo valor: ");
let opcionMenu: number= fs.questionInt("Ingrese 1 si quiere sumar o 2 si quiere restar: ");


function dibujarGuiones():void{
    linea="-";
    for(i=0; i <=40; i++){
        linea=linea+"-";
    }
    console.log(linea);
}

if(opcionMenu == 1){
    dibujarGuiones();
    console.log("el resultado es"+ (numero1 + numero2));
    dibujarGuiones();
}

else if(opcionMenu == 2){
    dibujarGuiones();
    console.log("el resultado es: "+(numero1 - numero2));
    dibujarGuiones();
}
