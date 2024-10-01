import* as fs from 'readline-sync';

let numero1: number = fs.questionFloat("Ingrese un numero para saber si es multiplo: ");
let numero2: number = fs.questionFloat("Ingrese el otro numero: ");


let esMultiplo = (a:number,b:number) : boolean =>{
    let residuo : number = a%b
    if( residuo == 0){
    return true    
    }else{
    return false}
}

console.log(esMultiplo(numero1,numero2))