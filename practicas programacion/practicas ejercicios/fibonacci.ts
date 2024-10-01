let iteraciones:number=15;
let numeros=[0,1];
let i:number=2;

while(i<iteraciones){
    numeros[i]=numeros[i-2] + numeros [i-1];
    i++
}
console.log(numeros);

console.log(numeros.length);

