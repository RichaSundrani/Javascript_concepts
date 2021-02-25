// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1, 2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

var nums = [2, 7, 11, 15, 20, 10, 3, 6, 9, 4];
target = 6;
var diff = 0;
var index1, index2;

function findSun(nums, target) {
    for (i in nums) {
        diff = target - nums[i];
        if (diff === 0) {
            console.log("target is same as the value in nums");
            console.log("index : " + i + "  value : " + nums[i]);
        } else {
            nums.forEach(element => {
                if (element === diff) {
                    index1 = nums.indexOf(element);
                    index2 = i;
                    return true;
                }
                return false;
            });
        }
    }
    console.log(index1, index2);
    return index1, index2;
}

findSun(nums, target);