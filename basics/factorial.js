var result;

function factorial(num) {
    if (num == 0) {
        result = 1;
    } else {
        result = num * factorial(num - 1);
    }
    return result;
}

console.log(factorial(5));