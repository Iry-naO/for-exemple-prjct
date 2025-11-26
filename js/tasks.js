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
