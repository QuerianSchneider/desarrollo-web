import * as rs from "readline-sync";
const initialPrize: number = rs.questionFloat("input InitialPrize:$");
const discount = 0.1
console.log("Price after discount is $", initialPrize * 0.9);
