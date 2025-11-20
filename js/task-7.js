// Задача №7
// Створи функцію isEven(num)
// Функція має повернути: "Even" - якщо число парне; "Odd" - якщо число непарне

function isEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(5));
console.log(isEven(6));
