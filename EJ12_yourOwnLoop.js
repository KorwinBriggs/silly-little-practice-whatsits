/*
Eloquent Javascript, page 95, invent the for loop

ie, instead of the standard: "for (value, test function, update function) {body function}
make: "forLoop(value, test function, update function, body function)
*/

function forLoop(indexValue, testFunction, updateFunction, bodyFunction) {
    let i = indexValue;
    while (testFunction(i) == true) {
        bodyFunction(i);
        i = updateFunction(i);
    }
}

//and for fun, a recursive version:

function recursiveFor(indexValue, testFunction, updateFunction, bodyFunction) {
    let i = indexValue;
    if (testFunction(i) == false) return;
    else {
        bodyFunction(i);
        recursiveFor(updateFunction(i), testFunction, updateFunction, bodyFunction);
    }
}

//Sadly, the internet says recursion is usually a bad way of doing things, on account of the stack.


forLoop(3, n => n > 0, n => n - 1, console.log);
recursiveFor(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1