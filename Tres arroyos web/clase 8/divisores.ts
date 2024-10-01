import* as fs from 'readline-sync';
/*Ejercicio: Divisores

• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior
*/
let cantidadDedivisores:number
let dividendo:number=fs.questionInt("Ingrese un numero");


function esMultiplo(a:number,b:number):boolean{
    let esMultiplo:boolean=false
if(a%b==0){
esMultiplo=true
}
return esMultiplo
}

