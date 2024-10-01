let hour: number = 22;
let day: string = "monday";
let isRaining: boolean = false;

//es domingo y es de mañana: sacamos el perro a pasear.

//es domingo y es de tarde o es cualquier dia y llueve: hacer donuts (que te hacés el yanqui bro, hacé tortas fritas... o buñuelos)

//si no es domingo, hay que trabajar

if (day === "sunday") {
  if (hour >= 7 && hour <= 12) {
    console.log("Firulais se va de paseo... 🐶");
  } else if (hour >= 13 && hour <= 18) {
    console.log("Cocinamos unas donuts... 🍩");
  } else {
    console.log("Toy haciendo noni... 🛌🏽");
  }
} else {
  if (isRaining) {
    console.log("Cocinamos unas donuts... 🍩");
  }
  console.log("Vayamos a trabajar... 👷🏽‍♀️");
}