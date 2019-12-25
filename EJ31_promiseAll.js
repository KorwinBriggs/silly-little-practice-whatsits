/*
Eloquent Javascript, page 201, write my own version of Promise.all called
Promise_all that takes an array of promises, waits for them all to finish,
and returns an array of result values.

If one of the Promises fail, the Promise returned by Promise_all fails as
well, returning the failing Promise's error.

On a personal note, I think "Promise" is a misnomer, and these things should
have been called, like, "asyncTest" or something, so that understanding javascript
Promises wouldn't clash with my understanding of real-world promises, which
usually only return yet more promises if someone sends an IOU.

Which might be part of why javascript now uses async functions.
*/

"use strict";


function Promise_all(promises) {
    return new Promise( (resolve, reject) => {
        let resultArray = [];
        let numberOfPromises = promises.length;
        for (let promise of promises) {
            promise.then(value => {
                resultArray.push(value);
                console.log(resultArray);
                numberOfPromises --;
                if (numberOfPromises == 0) {resolve(resultArray)};
            })
            promise.catch(reject);
        }
    });
}
/*
Initially, I tried doing this with a simple for/of loop, without the numberOfPromises variable,
using each promise's then to add its value to resultArray, and then resolving outside the for/of
loop at the bottom. Turns out this made the resolve happen outside of (and therefore before) the 
asyncronous parts, returning empty arrays.

Asyncronicity is hard.
*/

//TESTS
function promiseTime(num, time) {
    return new Promise(resolve => {
        setTimeout( () => resolve(num, time) );
        console.log(num, time);
    })
}

Promise.all([promiseTime(1,30), promiseTime(2,20), promiseTime(3,10)]).then(array => {console.log(array)}) // [1, 2, 3]

Promise_all([promiseTime(1,30), promiseTime(2,20), promiseTime(3,10)]).then(value => {console.log(value)}); // [1, 2, 3]

Promise_all([promiseTime(1,30), Promise.reject('x'), promiseTime(3,10)]).catch(error => {console.log(error)}); // x

