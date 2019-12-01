/*
Eloquent Javascript, page 79, reversing an array.
(first, take an array, return a new reversed array)
(second, reverse an array without using a new array)
*/

function reverseArray(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.unshift(element);
    });
    return newArray;
}

function reverseArrayInPlace(array) {
    let initialLength = array.length;
    for (i = (initialLength-1) ; i > -1 ; i--) {
        array.push(array[i]); //adding the reversed array to the end of the original array
    }
    array = array.slice(initialLength); //cutting off the original array
    return array;
}
//1234; 12344; 123443; 1234432; 12344321; (slice) 4321;

console.log(reverseArray([1,2,3,4]));

console.log(reverseArrayInPlace([1,2,3,4]))