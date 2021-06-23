/*
Eloquent Javascript, page 38, make a silly little fizzbuzz
(which is to say, log numbers from 1 to 100, printing fizz for multiples of 3, 
buzz for multiples of 5, and fizzbuzz for multiples of both.
*/


function fizzbuzz(totalNum, fizzFactor, fizzWord, buzzFactor, buzzWord) {
    for (num = 0; num < totalNum; num++) {
        word = '';
        if (num % fizzFactor === 0) word += fizzWord;
        if (num % buzzFactor === 0) word += buzzWord;
        if (word != '') console.log(word);
        else console.log(num);
    }
}

fizzbuzz(100, 3, 'fizz', 5, 'buzz');