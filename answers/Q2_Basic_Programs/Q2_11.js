var number = Number(prompt("Enter a number from 0 to 100"));

while (number < 0 || number > 100) {
    alert("Error: the number must be from 0 to 100.");
    number = Number(prompt("Enter a number from 0 to 100"));
}

alert(number);
