/*
Eloquent Javascript, page 55, check minimum number.
And for personal interest, make one that checks smallest of lots of numbers
*/


function minimum(num1, num2) {
    if (num1 <= num2) return num1;
    else return num2;
}

function minimumOfMany(...nums) { //Apparently "rest parameters" convert tons of arguments into an array
    let smallest = nums[0];
    nums.forEach(num => {
        if (num <= smallest) smallest=num;
    })
    return smallest;
}

console.log(minimumOfMany(9,10,1,1,-4,200,4));