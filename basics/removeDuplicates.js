// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// let chars = ['A', 'B', 'A', 'C', 'B'];
// let chars = [1, 2, 2, 3, 3, 3, 5, 6];
// let chars = ['Kd', 'Richa', 'KD', 'Richa', 'Kd', "NM", "NM"];
// let chars = [1, 2, 2, 3, 3, 3, 5, 6, 9, 9, 9, 9, 9, 10, 10, 1, 1, 1, 1, 1, 5, 5, 5, 7, 8];
// let uniqueChars = chars.filter((c, index) => {
//     console.log("value: " + c + "  ---  " + chars.indexOf(c) + "   -- " + index);
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);


let vals = [2, 3, 4, 6, 8, 9, 9, 9, 9, 8, 8, 10, undefined];
// function isEven(num) { 
//     if (num % 2 == 0) {
//         return true;
//     } else { 
//         return false;
//     }
// }

// function isEven(num) {
//     return (num % 2 == 0)
// }
// vals = vals.filter(isEven);
// console.log(vals);

// vals = vals.filter(x => (x % 2 == 0));
// console.log(vals);

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let dupChars = chars.filter((c, index) => {
//     return chars.indexOf(c) !== index;
// });

// console.log(dupChars);

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);

// 
let str = "It was a dark and starry night!  ";
let words = str.split(/\W+/).filter(word => word.length > 4);
console.log(words);