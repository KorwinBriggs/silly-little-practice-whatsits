/*
Eloquent Javascript, page 165, write regular expressions for the following
in as few characters as possible.

Oh, and unless specifically mentioned, no need to separate words.
*/

function regexTest(regex, test) {
    let match;
    while (match = regex.exec(test)) {
        console.log(`Found ${match[0]} at ${match.index}`);
    }
}

//I modified the above function from a couple lines in the book. 
//As long as I add a g to each regular expression, it should pump every
//match between the regular expression and the test phrase into the console.

//car and cat
let test1 = "The cat's paws could barely reach the car's wheel, but it drove with a madness.";
let reg1 = /ca[rt]/g;
regexTest(reg1, test1);
//Found cat at 4
//Found car at 38

//pop and prop
let test2 = "We had to prop up pop with a system of gears and pullies."
let reg2 = /pr?op/g
regexTest(reg2, test2);
//Found prop at 10
//Found pop at 18

//ferret, ferry, ferrari
let test3 = "I don't care if it's a ferrari, it doesn't go on the ferry with a ferret in the gas tank."
let reg3 = /ferr(et|y|ari)/g
regexTest(reg3, test3);
//Found ferrari at 23
//Found ferry at 53
//Found ferret at 66

//anything ending in ious
let test4 = "Devious Stevious's injury was grievious - I'd never seen a wound so bleedious."
let reg4 = /\b\w+ious\b/g
regexTest(reg4, test4);
//Found Devious at 0
//Found Stevious at 8
//Found grievious at 30
//Found bleedious at 68

//whitespace followed by a period
let test5 = "Only heathens put two spaces after a period ."
let reg5 = /\s\./g
regexTest(reg5, test5)
//Found  . at 43

//any word longer than 6 letters
let test6 = "A test, a longer test, an even longerer test."
let reg6 = /\w{7,}/g
regexTest(reg6, test6)
//Found longer at 10
//Found longerer at 31

//any word that doesn't have e or E
let test7 = "Here begins a test of relative ease."
let reg7 = /\b[^e\s]+\b/g
regexTest(reg7, test7)
//Found a at 12
//Found of at 19






