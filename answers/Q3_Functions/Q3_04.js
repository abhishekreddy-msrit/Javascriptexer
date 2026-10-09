function isValid(n) {
    return typeof n == "number" && !isNaN(n) && n >= 0 && n <= 100;
}

function isInteger(n) {
    return isValid(n) && Math.floor(n) == n;
}

console.log(isInteger(10));
console.log(isInteger(10.5));
console.log(isInteger(101));
