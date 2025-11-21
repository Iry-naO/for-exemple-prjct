// Задача №9
// Створи функцію abs(num), яка повертає значення числа: abs(5) - 5; abs(-7) - 7; abs(0) - 0;

// function abs(num) {
//   if (num < 0) {
//     return -num;
//   }
//   return num;
// }

// console.log(abs(-6));
// console.log(abs(10));

// або

function abs(num) {
  return num < 0 ? -num : num;
}

console.log(abs(-1));
console.log(abs(1));

// або

// const abs = (num) => (num < 0 ? -num : num);

// console.log(abs(-56));
// console.log(abs(8));
