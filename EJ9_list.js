/*
Eloquent Javascript, page 80, turn a silly little array into a silly little list, and vice versa.
("List," in this case, meaning a useful but ugly pile of nested functions, ie:

list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            falue: 3,
            rest: null;
        }
    }
})

And after that, make a couple other functions that 1) adds something to the beginning of a list, and
2) takes a list and number and returns the element at a given position in the list.
*/


function arrayToList(array) {
    const buildListElement = function(index) {
            return {
                value: array[index],
                rest: (array[index+1] === undefined) ? null : buildListElement(index+1)
            }
        }
    let list = buildListElement(0);
    return list;
}

//let's build it recursively: 
//each level, value = array[value], 
//if array[value+1] exists, rest = what we just did(i+1)
//otherwise, rest = null

//arraytolist test
console.log(arrayToList([1,2,3,4]))


function listToArray(list) {
    let array = []; 
    const buildArrayElement = function(index) {
        array.push(index.value);
        if (index.rest != null) {
            buildArrayElement(index.rest);
        }
    }
    buildArrayElement(list);
    return array;
}

//recursive again: at each level, array.push(value);
//and if array.rest != null, do it again (i+1);

//listtoarray test
console.log(listToArray(arrayToList([1,2,3,4])))

//So, realtalk, recursion might be better than sex?

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

//prepend test
let testList = arrayToList([1,2,3,4]);
testList = prepend(0, testList);
console.log(testList);



function nth(levelsToGo, list) {
    if (levelsToGo <= 0) {
        return list.value;
    } else {
        if (list.rest === null) {
            return undefined;
        } else {
            return nth(levelsToGo-1, list.rest);
        }
    }

}
//levels to go, list
//if this is the right level, return value
//if the next level is null, return undefined. otherwise go to next level

//nth test
console.log(nth(6,arrayToList([1,2,3,4,6,7,8,1])))

//so, if index=0, we want list.value;
//if index = 1, we want list.rest.value;
//if index = 2, we want list.rest.rest.value, etc.
//i'd like to make a string and then run it as code, but apparently eval() is "evil".
//so instead, lets go back to the recursive plan: go several objects deep, return its .value




