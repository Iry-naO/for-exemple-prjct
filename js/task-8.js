// Задача №8
// Створи функцію capitalize(userName)
// Функція має повертати ім'я, де: перша літера - велика; всі інші - маленькі;

// function capitalize(userName) {
//   const userNameLower = userName.toLowerCase();
//   const userNameFirst = userNameLower[0].toUpperCase();
//   const userNameRest = userNameLower.slice(1);
//   return userNameFirst + userNameRest;
// }

// console.log(capitalize("iRyNa"));

// або

// function capitalize(userName) {
//   userName = userName.toLowerCase();
//   return userName[0].toUpperCase() + userName.slice(1);
// }

// console.log(capitalize("iRyNA"));

// або

const capitalize = (n) => n[0].toUpperCase() + n.slice(1).toLowerCase();
console.log(capitalize("irYNA"));
