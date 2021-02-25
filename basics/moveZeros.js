// Given an array nums, write a function to move all 0's to the end of it 
// while maintaining the relative order of the non - zero elements.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// var inputArry = [0, 1, 0, 3, 12];
var inputArry = [0, 1, 0, 3, 12, 11, 9, 0, 7, 0, 7, 0, 7, 2, 3, 4, 0, 5, 5, 7];

function moveZero(inputArry) {
    inputArry.forEach(element => {
        if (element === 0) {
            inputArry.splice(inputArry.indexOf(element), 1);
            inputArry.push(element);
        }
    });
    console.log(inputArry);
}

moveZero(inputArry);