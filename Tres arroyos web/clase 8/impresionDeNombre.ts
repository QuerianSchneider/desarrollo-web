import* as fs from 'readline-sync';

/*Ejercicio: Impresión de nombre

• Implemente un método llamado imprimirNombre que reciba un
nombre y un apellido y devuelva los dos datos concatenados
en una variable de tipo string.
El string devuelto debe imprimirse por consola.

• Refactorizar el método dibujarGuiones utilizado para el
ejercicio de la calculadora realizado anteriormente*/

let nombre:string=fs.question("Ingrese el nombre: ");
let apellido:string=fs.question("Ingrese el apellido: ");

function imprimirNombre(nombre:string, apellido:string):string{
    return nombre +" "+apellido
}
console.log(imprimirNombre(nombre, apellido));
