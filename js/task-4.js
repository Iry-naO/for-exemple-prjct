// Задача №4
// Створи функцію greet(userName)
// Функція має повертати рядок: <Hello, <userName>

// 1 варіант
// function greet(userName) {
//   const message = `Hello ${userName}!`;
//   return message;
// }

// console.log(greet("Iryna"));

// 2 варіант
function greet(userName) {
  const message = `Hello, ${userName}!`;
  return message;
}

const result = greet("Iryna");
console.log(result);
