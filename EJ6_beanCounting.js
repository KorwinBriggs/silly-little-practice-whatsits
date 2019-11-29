/*
Eloquent Javascript, page 56, count number of times a character appears in a string.
(suggests using string[n] to treat it like an array)
*/


function countChar(theCharacter, theString) {
    theString = theString.split('');
    let count = 0;
    theString.forEach(aCharacter => {
        if (aCharacter === theCharacter) count++;
    });
    return count;
}

console.log(countChar('e', 'Beeeeeann'));