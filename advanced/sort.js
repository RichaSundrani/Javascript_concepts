//  custome sort - bubble sort 

let input = [2, 1, 3, 4, 5, 22, 9, 8, 5, 7, 11, 1];

let bubbleSort = (nums) => {
    let counter = 1;
    // console.log(counter);
    while (counter < nums.length) {
        for (let i = 0; i < nums.length - counter; i++) {
            if (i + 1 < nums.length || i + 1 == nums.length) {
                if (nums[i] > nums[i + 1]) {
                    let temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                    // console.log(`Swapped ${nums[i]} and ${nums[i + 1]}`);
                    // console.log(nums);

                }
            }
        }
        counter++;
    }
    console.log(nums);
    return nums;
};


console.log(bubbleSort(input));