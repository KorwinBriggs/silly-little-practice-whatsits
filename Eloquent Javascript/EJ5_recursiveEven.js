/*
Eloquent Javascript, page 55, check if number is even USING RECURSION. *jazz fingers*
*/

function recursiveIsEven (num) {
    if (num === 0) return true;
    else if (num === 1 || num === -1) return false;
    else return recursiveIsEven(Math.abs(num-2));
}

console.log(recursiveIsEven(-4));