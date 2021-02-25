var inputInt = -12030405670890000;
// var inputInt = -987654321;
// function reverserInt(num) {
//     num = num.toString().split("");
//     // remove any tail zeros 
//     num = newArray(num);
//     var j = num.length - 1;
//     var first, last, iterations, finalNum;
//     if ((num.length) % 2 == 0) {
//         iterations = (num.length) / 2;
//     } else {
//         iterations = ((num.length) / 2) + 0.5;
//     }
//     for (var i = 0; i < iterations; i++) {
//         if (num[i] == "-") {
//             first = num[i + 1];
//             last = num[j];
//             num[j] = first;
//             num[i + 1] = last;
//             i += 1;
//         } else {
//             first = num[i];
//             last = num[j];
//             num[j] = first;
//             num[i] = last;
//         }
//         j -= 1;
//     }
//     finalNum = numString(num);
//     return parseInt(finalNum);
// }

// function newArray(num) {
//     for (nums in num) {
//         if (num[num.length - 1] == 0) {
//             num.pop();
//         } else {
//             return num;
//         }
//     }
// }

// function numString(newNum) {
//     var finalString = "";
//     for (i in newNum) {
//         finalString = finalString.concat(newNum[i]);
//     }
//     return finalString;
// }

// console.log(reverserInt(inputInt));


// OR 

// function reverserInt(num) {
//     num = num.toString().split("");
//     num = newArray(num);
//     if (num[0] === '-') {
//         num = num.reverse();
//         num.pop();
//         num.unshift('-');
//         num = num.join("");
//     } else {
//         num = num.reverse().join("");
//     }
//     return num;
// }
// function newArray(num) {
//     for (nums in num) {
//         if (num[num.length - 1] == 0) {
//             num.pop();
//         } else {
//             return num;
//         }
//     }
// }



// console.log(reverserInt(inputInt));


// OR 

const reverse = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

console.log(reverse(inputInt));