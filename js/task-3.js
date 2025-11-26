// ________________________________________________________________________________
// Задача №3
// Створи змінну temp.
// Якщо температура нижче 0 - виведи "Cold",
// якщо 0 або вище - "Warm"
// ________________________________________________________________________________

// 1 варіант-----------------------------------------------------------------------
// let temp = -1;
// let isCold = temp < 0;

// console.log(isCold);

// 2 варіант-----------------------------------------------------------------------
// let temp;
// temp = 30;

// if (temp < 0) {
//   console.log("Cold");
// } else {
//   console.log("Warm");
// }

// 3 варіант-----------------------------------------------------------------------
// let temp = -18;
// const cold = temp < 0;
// const warm = temp >= 0;
// const message = `Is it cold today? ${cold}. Do you think it is warm? ${warm}.`;

// console.log(message);

// 4 варіант (тернарний оператор)-------------------------------------------------
// let temp = -5;
// const message = temp < 0 ? "Cold" : "Warm";
// console.log(message);

// 5 варіант (функція)------------------------------------------------------------
// function getWeather(temp) {
//   if (temp < 0) {
//     return "Cold";
//   }
//   return "Warm";
// }

// console.log(getWeather(-9));
// console.log(getWeather(10));

// 6 варіант (функція + тернарний оператор)---------------------------------------
function getWeather(temp) {
  return temp < 0 ? "Cold" : "Warm";
}
console.log(getWeather(-5));
console.log(getWeather(9));
