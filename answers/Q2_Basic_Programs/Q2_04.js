var firstNumber = prompt("Enter the first number");
var secondNumber = prompt("Enter the second number");

var stringResult = firstNumber + secondNumber;
alert("Problem: prompt values are strings, so + joins them: " + stringResult);

var numericSum = Number(firstNumber) + Number(secondNumber);
alert("Correct numeric sum: " + numericSum);
