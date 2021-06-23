/*
Eloquent Javascript, page 142, write a function to wrap this garbage primitiveMultiply
function and keep calling it until it succeed.

But only handle the specific exception I want to handle.
*/


//I'm writing a simulation of said garbage function first -
//20% of the time it multiplies two numbers; the other 80% it throws an exception.

class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(num1, num2) {
    //20% chance of working:
    if ( Math.floor(Math.random() * 5) == 0 ) {
        return num1 * num2;
    }
    throw new MultiplicatorUnitFailure("Sorry, but this function is trash");
}

function forceMultiply(num1, num2) {
    try {
        return primitiveMultiply(num1, num2);
    } catch (MultiplicatorUnitFailure) {
        return forceMultiply(num1, num2);
    }
}


//console.log(primitiveMultiply(2,3)); //Usually throws errors
console.log(forceMultiply(2,3)) //6