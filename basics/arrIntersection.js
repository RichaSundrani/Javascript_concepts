// Given two arrays, write a function to compute their intersection.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

var input1 = [1, 2, 2, 1];
var input2 = [2, 2];


function intersect(input1, input2) {
    let newArry = [];
    for (var i = 0; i < input1.length; i++) {
        for (var j = 0; j < input2.length; j++) {
            if (input1[i] === input2[j]) {
                newArry.push(input1[i]);
                input1.splice(i, 1);
                input2.splice(j, 1);
                i, j = 0;
            }
        }
    }
    return newArry;
}

console.log(intersect(input1, input2));