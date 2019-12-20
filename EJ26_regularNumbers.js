/*
Eloquent Javascript, page 166, write an expression that matches only 
javascript-style numbers -- meaning it has digits, a plus or minus sign, a decimal dot,
and that weird exponent notation that's like "5e-3" or "1E10"
*/

//including my previous regex test function:
function regexTest(regex, test) {
    let match;
    while (match = regex.exec(test)) {
        console.log(`Found ${match[0]} at ${match.index}`);
    }
}

const test = "Some letters, =, &, 25 -26 +27 42.333 4. .789 more words - 5e-3 oh goodness 1E10"
let regex = /[\+\-]?((\d+\.\d+)|(\.\d+)|(\d[eE]\-?\d+)|\d+\.?)/g;
//translation: + -     55.343    .322       3e-10       45
regexTest(regex, test)

/*
want to look for optional plus or minus sign,
followed by required digits,
followed by optional decimal and more digits OR
an e, and then an optional minus sign and more digits
*/
