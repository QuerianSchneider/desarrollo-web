import * as rs from "readline-sync";
let lap1: number;
let lap2: number;
let lap3: number;
let lap4: number;
let totalTime: number;
let media: number;

console.log("Laps \n -------------- \n");
lap1= rs.questionFloat("ingrese tiempo de vuelta 1:");
console.log()

lap2 = rs.questionFloat("ingrese tiempo de vuelta 2:");
console.log()

lap3 = rs.questionFloat("ingrese tiempo de vuelta 3:");
console.log()

lap4 = rs.questionFloat("ingrese tiempo de vuelta 4:");
console.log()

console.log("-------------");
totalTime = lap1 + lap2 + lap3 + lap4;
media = totalTime / 4;

console.log("Tiempo total"+ totalTime + '"');
console.log("\n Tiempo promedio"+ media + '"');

