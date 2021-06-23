/*
Eloquent Javascript, page 95, use reduce and concat to flatten an array of arrays into a single array
with all the same elements -- so, in other words, turn a 2D array into a 1D array.

and for personal interest, make it work to infinite depth (or at least as deep as the stack limit)
*/

function flatten(array) {
    
    if (array instanceof Array) { //checking that it's an array
        let newArray = array.reduce( (accumulator, currentValue) => {
            return accumulator.concat(currentValue);
        }, []);

        //now check if there are any nested arrays, and flatten again if there are
        if (newArray.some( value => {return (value instanceof Array == true)})) {
            return flatten(newArray);
        }
        return newArray;

    } else return [array]; //if the function wasn't passed an array, return a one-item array
}


//tests:
let array0 = 1;
let array1 = [1, 2, 3, 4, 5];
let array2 = [[1],[2],3, 4,[5]];
let array3 = [1, [2],[[3, 4], 5]];
let array4 = [[1, 2], [3, 4, 5]];

console.log(flatten(array0));
console.log(flatten(array1));
// console.log(array1.reduce(function(flat, current) {return flat.concat(current);}));
console.log(flatten(array2));
console.log(flatten(array3));
console.log(flatten(array4));
console.log([1,2].concat([3,4]))