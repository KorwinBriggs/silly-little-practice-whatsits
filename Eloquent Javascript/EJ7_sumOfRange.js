/*
Eloquent Javascript, page 79, make one function to return an array of all numbers in a range,
and another that takes an array and returns the sum of its contents.
Bonus objective: give the range function another argument that allows for ex. every third number
*/

function range(num1, num2, step=1) {
    let numArray = []
    for (i=num1; i<=num2; i+=step) {
        numArray.push(i);
    }
    return numArray;
}


function sum(numArray) {
    let total = 0;
    numArray.forEach(num => {
        total += num;
    })
    return total;
}

let testArray = range(1,10,1);
console.log(testArray)
console.log(sum(testArray));
