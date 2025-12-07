// 1------------------------------------------------------
// function getAge(userAge) {
//   if (userAge < 12) {
//     return "Child";
//   } else if (userAge >= 12 && userAge <= 17) {
//     return "Teeneger";
//   } else {
//     return "Adult";
//   }
// }

// console.log(getAge(6));
// console.log(getAge(15));
// console.log(getAge(57));
// ________________________________________________________

// 2-------------------------------------------------------
// function checkPassword(password) {
//   if (password.length < 6) {
//     return "Пароль занадто короткий.";
//   } else if (password.includes(" ")) {
//     return "Пароль не може містити пробіли.";
//   } else {
//     return "Ок";
//   }
// }

// console.log(checkPassword("ira"));
// console.log(checkPassword("lala lala"));
// console.log(checkPassword("kokkookko"));
// _________________________________________________________

// 3--------------------------------------------------------
// function getDiscountPrice(sum) {
//   let discount;
//   if (sum < 500) {
//     discount = 0;
//     return sum;
//   } else if (sum < 1000) {
//     discount = 5;
//     return sum - (sum * discount) / 100;
//   } else if (sum < 2000) {
//     discount = 10;
//     return sum - (sum * discount) / 100;
//   } else {
//     discount = 15;
//     return sum - (sum * discount) / 100;
//   }
// }

// console.log(getDiscountPrice(400));
// console.log(getDiscountPrice(600));
// console.log(getDiscountPrice(1800));
// console.log(getDiscountPrice(3900));
// _________________________________________________________

// 4--------------------------------------------------------
// function temperatureStatus(temp) {
//   if (temp < -10) {
//     return "Freezing";
//   } else if (temp <= 10) {
//     return "Cold";
//   } else if (temp <= 20) {
//     return "Mild";
//   } else if (temp <= 30) {
//     return "Warm";
//   } else {
//     return "Hot";
//   }
// }

// console.log(temperatureStatus(-16));
// console.log(temperatureStatus(9));
// console.log(temperatureStatus(16));
// console.log(temperatureStatus(25));
// console.log(temperatureStatus(39));
// _________________________________________________________

// 5--------------------------------------------------------
// function checkNumber(num) {
//   if (num > 0) return "Positive";
//   if (num < 0) return "Negative";
//   if (num === 0) return "Zero";
// }

// console.log(checkNumber(8));
// console.log(checkNumber(-9));
// console.log(checkNumber(0));
// _________________________________________________________

// 6--------------------------------------------------------
// function validateEmail(email) {
//   let emailAt = email.includes("@");
//   let emailStart = email.startsWith("@");
//   let emailEnd = email.endsWith("@");
//   let emailLength = email.length < 5;

//   if (!emailAt || emailStart || emailEnd || emailLength) {
//     return "Invalid";
//   } else {
//     return "Valid";
//   }
// }

// console.log(validateEmail("test@gmail.com"));
// console.log(validateEmail("hello@"));
// console.log(validateEmail("@gmail.com"));
// console.log(validateEmail("adf"));
// console.log(validateEmail("my@mail"));
// __________________________________________________________

// 7---------------------------------------------------------
// function test() {
//   let arr = [];
//   arr.push(5);
//   arr.push(10);
//   return arr;
// }
// console.log(test());
// __________________________________________________________

//8 ---------------------------------------------------------
// const products = [
//   "Apple iPhone 15",
//   "Sumsung Galaxy S24",
//   "Apple Watch",
//   "Xiaomi Redmi Note",
//   "Apple AirPods",
// ];
// let keyword;
// function findByKeyword(products, keyword) {
//   let keyArray = [];
//   const lowerKeyword = keyword.toLowerCase();
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i].toLowerCase();
//     if (product.includes(lowerKeyword)) {
//       keyArray.push(products[i]);
//     }
//   }
//   return keyArray;
// }
// console.log(findByKeyword(products, "Apple"));
// ____________________________________________________________

// 9-----------------------------------------------------------
function getPositiveStats(numbers) {
  let statsArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      statsArray.push(numbers[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < statsArray.length; i++) {
    sum += statsArray[i];
  }

  let avg = sum / statsArray.length;

  let min = statsArray[0];
  for (let i = 1; i < statsArray.length; i++) {
    if (statsArray[i] < min) {
      min = statsArray[i];
    }
  }

  let max = statsArray[0];
  for (let i = 1; i < statsArray.length; i++) {
    if (statsArray[i] > max) {
      max = statsArray[i];
    }
  }
  return [sum, avg, min, max];
}

console.log(getPositiveStats([16, -4, 8, 45, -9]));
