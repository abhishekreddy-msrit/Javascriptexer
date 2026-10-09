function isValid(n) {
    return typeof n == "number" && !isNaN(n) && n >= 0 && n <= 100;
}

console.log(isValid(50));
console.log(isValid(50.5));
console.log(isValid(150));
