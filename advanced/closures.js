// let myName = "Richard Parkar";

// function printName() {
//     console.log(myName);
// }

// myName = "joie";

// printName();

// function outerFunc(outer) {
//     return function innerFunc(inner) {
//         console.log(`Outer ${outer}`);
//         console.log(`inner ${inner}`);
//     }
// };

// let newFunc = outerFunc("out");

// newFunc("inner"); 

function mainFunc() {
    var privateCount = 0;
    function changeBy(val) {
        return privateCount += val;
    }
    return {
        increment: () => {
            return changeBy(1);
        },
        decrement: () => {
            return changeBy(-1);
        },
        value: () => {
            return privateCount;
        }
    }
}

var getFunc = mainFunc();
console.log(getFunc.value());
console.log(getFunc.increment());
console.log(getFunc.increment());
console.log(getFunc.increment());
console.log(getFunc.increment());
console.log(getFunc.value());
console.log(getFunc.decrement());
console.log(getFunc.value());
