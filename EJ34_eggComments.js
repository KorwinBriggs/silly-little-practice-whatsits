/*
Eloquent Javascript, page 215, add support for comments to Egg by changing the
skipSpace function from the parser to also skip stuff after '#'.
*/

"use strict"

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    //this used to just return string.slice(first); what follows is the new bit
    let newString = string.slice(first);
    if (newString.search(/\#/) == 0) return "";
    return newString;
}

console.log(skipSpace(" #test of this code"))

