// let a = 10;
// let b = "hi";
// let c = a;  // value of a is assigned here not reference to a
// c = c + 1;
// console.log(c);
// console.log(a);

// c = [1, 2];
// let d = c;   // assigning the reference (memkory address) of [1, ]
// console.log(c);
// console.log(d);
// console.log(` c === d ${c === d}`);
// console.log(` c == d ${c == d}`);
// d.push(3);
// console.log(c);
// console.log(d);
// d = [3, 4, 5];
// console.log(` c === d ${c === d}`);
// console.log(` c == d ${c == d}`);
// console.log(c);
// console.log(d);

let c = [1, 2];
console.log(`c = ${c}`);
add(c, 3);
console.log(`c = ${c}`);

function add(array, element) {
    // array.push(element);
    array = [element];
}
