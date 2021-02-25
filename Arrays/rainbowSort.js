let input = ['green', 'red', 'blue', 'pink'];
let rainbow = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

// let rainbowSort = (a, b) => {
//     if (rainbow.indexOf(b.toLowerCase()) > rainbow.indexOf(a.toLowerCase())) {
//         return -1;
//     } else if (rainbow.indexOf(b.toLowerCase()) < rainbow.indexOf(a.toLowerCase())) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let temp1 = input.sort(rainbowSort);

let temp2 = input.sort((a, b) => rainbow.indexOf(a) < rainbow.indexOf(b) ? -1 : 1);
console.log(temp1);
console.log(temp2);