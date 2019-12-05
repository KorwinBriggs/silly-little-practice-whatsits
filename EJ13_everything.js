/*
Eloquent Javascript, page 95, "Everything" --
Write an "every" function that takes an array and a function 
and returns true if it's true for every element.

Oh, and make two versions: one with a loop, one with the array.some() method.
*/

function everyFor(array, test) {
    for (let element of array) {
        if (test(element) == false) return false;
    }
    return true;
}


function everySome (array, test) {
    if ( array.some((element) => test(element) == false) ) {
        return false;
    }
    return true;
}


//tests:

function biggerThan6(num) {
    if (num > 6) return true;
    return false;
}

let array = [5,6,7,8]

console.log( everyFor(array, num => {return num > 4}) ) //true 
console.log( everyFor(array, num => {return num < 4}) ) //false
console.log( everyFor(array, biggerThan6)) //false

console.log( everySome(array, num => {return num > 4}) ) //true 
console.log( everySome(array, num => {return num < 4}) ) //false
console.log( everySome(array, biggerThan6)) //false





