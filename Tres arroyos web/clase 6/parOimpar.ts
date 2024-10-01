import* as fs from "readline-sync";
let i:number|null=null;
let nose:number=1
console.log("Si desea salir del programa ingrese -1")
while(i!==-1){
    i=fs.questionInt("Ingrese un numero para analizar si es par o impar: ");
    if(i==-1){
        console.clear()
    }else{
        if(i===0){
            console.log("Debe ingresar un numero que no sea 0");
        }else if(i%2==0){
            console.log("el numero es par")
        }else{
            console.log("El numero es impar")
        }
    }
    }
