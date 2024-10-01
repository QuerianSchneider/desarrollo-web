import * as rs from "readline-sync";
let nota:number;
let sumaNota:number=0;
let promedio:number;
let contador:number|null=null;

for(contador;contador>=10;contador++){
    nota= rs.questionInt("indique su nota: ");
    sumaNota=sumaNota + nota;

}
promedio= sumaNota / (contador);
console.log("Su nota promedio es: "+ promedio)
