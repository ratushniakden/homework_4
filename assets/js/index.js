"use strict";

//Condition tasks

//Task 1

/* let input = prompt("Enter value:");
if (input % 5 === 0 || input % 3 === 0 || input % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
} */

//Switch case tasks

//Task 1

/* const num = prompt("Choose a number from 1 to 4");
let result;

switch (num) {
  case "1":
    result = "winter";
    break;
  case "2":
    result = "Spring";
    break;
  case "3":
    result = "Autumn";
    break;
  case "4":
    result = "Summer";
    break;
  default:
    result = "Wrong input!";
    break;
}
console.log(result); */

//Task 2

/* const month = prompt("Choose a number from 1 to 12");
let result;

switch (month) {
  case "12":
  case "1":
  case "2":
    result = "Winter";
    break;
  case "3":
  case "4":
  case "5":
    result = "Spring";
    break;
  case "6":
  case "7":
  case "8":
    result = "Summer";
    break;
  case "9":
  case "10":
  case "11":
    result = "Autumn";
    break;
  default:
    result = "Wrong input!";
    break;
}
console.log(result); */

//Task 3

/* const dayOfWeek = prompt("Choose a number from 1 to 7");
let result;

switch (dayOfWeek) {
  case "1":
    result = "Monday";
    break;
  case "2":
    result = "Tuesday";
    break;
  case "3":
    result = "Wednesday";
    break;
  case "4":
    result = "Thursday";
    break;
  case "5":
    result = "Friday";
    break;
  case "6":
    result = "Saturday";
    break;
  case "7":
    result = "Sunday";
    break;
  default:
    result = "Wrong input!";
    break;
}
console.log(result); */

//Task 4

/* const day = prompt("Choose a number from 1 to 31");
let result;

switch (true) {
  case day > 0 && day <= 10:
    result = "First decade of a month";
    break;
  case day > 10 && day <= 21:
    result = "Second decade of a month";
    break;
  case day > 21 && day <= 31:
    result = "Third decade of a month";
    break;
  default:
    result = "Wrong input!";
    break;
}
console.log(result); */

// FOR ONLY tasks

//Task 1

/* const num = prompt("Enter value:");
let result = 1;

for (let i = 1; i <= num; i++) {
  result *= i;
}
console.log(`Factorial of number ${num} is ${result}`); */

//Task 2

/* const n = prompt("Enter value:");
let result = 1;
for (let i = 2; i <= n; i++) {
  result += 1 / i;
}
console.log(result); */

//Task 3

/* const lim1 = prompt("Enter first value:");
const lim2 = prompt("Enter second value:");
let result = 0;

for (let i = parseInt(lim1); i <= parseInt(lim2); i++) {
  result += i;
}
console.log(result); */

//Function tasks

//Task 1

/* function primeNumber() {
  const number = prompt("Enter value:");
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}
console.log(primeNumber()); */

//Task 2

/* const num1 = prompt("Enter first value:");
const num2 = prompt("Enter second value:");

function checkMultiplicity(num1, num2) {
  return num1 % num2 === 0;
}
console.log(checkMultiplicity(num1, num2)); */

//Task 3

/* const firstSide = prompt("Enter first side:");
const secondSide = prompt("Enter second side:");
const thirdSide = prompt("Enter secind side:");

function isTrianglePossible(firstSide, secondSide, thirdSide) {
  if (firstSide + secondSide >= thirdSide) {
    if (secondSide + thirdSide >= firstSide) {
      if (firstSide + thirdSide >= secondSide) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(
  isTrianglePossible(
    parseInt(firstSide),
    parseInt(secondSide),
    parseInt(thirdSide)
  )
); */

//Task 4

//4.1
/* const base = prompt("Enter base of triangle");
const height = prompt("Enter height of triangle");

function triangleArea(base, height) {
  return base * height * 0.5;
}
console.log(area(parseInt(base), parseInt(height))); */

//4.2
/* const side1 = prompt("Enter first side:");
const side2 = prompt("Enter second side:");

function rectangleArea(side1, side2) {
  return side1 * side2;
}
console.log(rectangleArea(parseInt(side1), parseInt(side2))); */

//Object tasks

//Task 1.1

/* let student = {
  name: "Alan",
  surname: "Nowak",
  sex: "male",
  phoneNumber: "+48316795425",
  email: "nowak.alan@gmail.com",
};
console.log(student); */

//Task 1.2

/* let physicalEducationChair = {
  name: "Physical Education Chair",
  class: "102A",
  isAvailable: true,
  mainSectionName: "Basketball",
  secondarySectionName: "Football",
  facultyDescription:
    "Lorem ipsum dolor sit amet, cum graece inimicus te, in tation numquam tibique vis.",
  phoneNumber: "220-06-07",
  email: "pe.chair@gmail.com",
};
console.log(physicalEducationChair); */

//Task 2.1

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Tasks 2.1* && 2.2 && 2.3 && 2.4 && 2.5 && 2.6

//2.1
/* let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 100);
}
console.log(array);
//2.2
console.log(`Length of array is ${array.length}`);
//2.3
console.log("Array elements with even indices ↓");
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]);
  }
}
//2.4
console.log("Even array element(s) ↓");
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}
//2.5  && 2.6
console.log("Zero element(s) index ↓");
let counter = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    counter++;
    console.log(i);
  }
}
//2.6
console.log("Number of zero elements ↓");
console.log(counter);
 */

//Function-constructor tasks

//Task 3.1

/* function Book(author, name, yearOfPublishing, publishingHouse) {
  this.author = author;
  this.name = name;
  this.yearOfPublishing = yearOfPublishing;
  this.publishingHouse = publishingHouse;
}

const book1 = new Book(
  "J. K. Rowling",
  "Harry Potter and the Philosopher's Stone",
  1997,
  "Bloomsbury"
);
console.log(book1);

function Ebook(author, name, yearOfPublishing, publishingHouse, format, eNum) {
  Book.call(this, author, name, yearOfPublishing, publishingHouse); // боль
  this.format = format;
  this.eNum = eNum;
}

Ebook.prototype = new Book();

const book2 = new Ebook(
  "J. K. Rowling",
  "Harry Potter and the Philosopher's Stone",
  1997,
  "Bloomsbury",
  "pdf",
  "	0-7475-3269-9"
);

console.log(book2); */

// 4

f/* unction MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }

  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[++this.length] = arguments[i];
      return this.length;
    }
  };

  this.pop = function () {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];
    delete [this.lastIndex];
    --this.length;
    return lastItem;
  };

  /* this.forEach = function (arr, callback, thisArg) {
    let i,
      length = arr.length;
    for (i = 0; i < length; i = i + 1) {
      callback(arr[i], i, arr);
    }
  }; */
} */