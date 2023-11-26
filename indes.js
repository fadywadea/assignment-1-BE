// Q.1

function calculateAgeInDays(ageInYears) {
  const daysInYear = 365;
  return ageInYears * daysInYear;
}

let ageInYears = prompt("Enter the age in years:");
console.log("Age in days:", calculateAgeInDays(ageInYears));

// Q.2

let numbersArray = [];
let count = parseInt(prompt("How many numbers do you want to enter?"));

for (let i = 0; i < count; i++) {
  numbersArray.push(parseInt(prompt("Enter a number:")));
}

function findSmallestNumber(arr) {
  let smallestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
}

console.log("The smallest number:", findSmallestNumber(numbersArray));

// Q.3

function sortDescending(num) {
  let numString = num.toString();
  let numArray = numString.split("");
  let sortedArray = numArray.sort((a, b) => b - a);
  return sortedArray;
}

let sortedArray = prompt("Enter the numbers for sort");
console.log(sortDescending(sortedArray));

// Q.4

function getNumbersFromUser() {
  const numbers = [];
  let userInput = prompt('Enter a number (or "stop" to finish): ');

  while (userInput !== "stop") {
    numbers.push(parseFloat(userInput));
    userInput = prompt('Enter a number (or "stop" to finish): ');
  }

  return numbers;
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

const numbers = getNumbersFromUser();
const average = calculateAverage(numbers);

console.log("The average of the numbers you entered is:", average);

// todo Q.5

//! The output of the two statements will be:
//? Console.log( [ ] == [ ] ) -> True
//? Console.log( { } == { } ) -> False

//! Explanation:
//? When we compare two empty arrays []==[], they are considered equal because both references point to the same memory location. Therefore, the output will be 'True'.
//? When we compare two empty objects {}=={}, they are not considered equal because although they have the same structure (i.e., they are both empty objects), they are different objects in memory. Therefore, the output will be 'False'.
//? In summary, when comparing arrays, JavaScript compares their reference in memory, whereas when comparing objects, JavaScript checks their internal structure and memory reference.

// todo Q.6

//! The output of this code will be:
//? A C B

//! Explanation:
//? The main() function is called, which logs "A" to the console immediately.
//? The setTimeout() function is called with a function that logs "B" to the console after a delay of 0 milliseconds. This means that the function will be executed as soon as possible, but not necessarily immediately.
//? The console.log() statement outside the setTimeout() function logs "C" to the console immediately.
//? Since the delay in setTimeout() is 0, the function inside it gets executed on the next tick, which means after the current stack of tasks is completed. In this case, it means after "C" is logged.
//? Therefore, the order of logging is "A", "C", and then "B".

// todo Q.7

//! The output of this code will be:
//? 10.

//! Explanation: In the first line, var num = 8; declares a variable num and initializes it to the value 8.
//? However, in the second line, var num = 10; redeclares the variable num and initialized it to the value 10, effectively overriding the previous value of 8.
//? Therefore, when console.log(num) is executed, it will log the updated value of num, which is now 10.

// todo Q.8

//! The output of this code will be:
//? Ayush
//? 21

//! Explanation: The code defines a function sayHi() that logs two variables, name and age, to the console. The function does not take any arguments, so it uses the global scope to access the variables.
//? In the global scope, we have declared two variables, name and age, and assigned them the values 'Ayush' and 21, respectively.
//? When we call the function sayHi(), it logs the values of name and age to the console, which outputs 'Ayush' and 21.
