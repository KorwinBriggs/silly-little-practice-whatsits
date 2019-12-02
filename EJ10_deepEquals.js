/*
Eloquent Javascript, page 80, make a function that compares objects by properties,
rather than just identities (so, === but with additional bits for object property comparison)
*/

function deepEquals(item1, item2) {
    if (item1 === item2) {
        return true; //handles non-objects and identical pointers
    }
    else if ((typeof item1 == "object") && (typeof item2 == "object")) { //check if both objects

        if (item1 == null || item2 == null) return false; //false if one's null
        if (Object.keys(item1).length !== Object.keys(item2).length) return false; //false if different number of properties
        
        for (let key in item1) { //checking all properties in object
            if (item2.hasOwnProperty(key)) { //if item 2 has the same property
                if (!deepEquals(item1[key], item2[key])) return false; //if the value isn't the same, false;
            }
            else return false; //if item 2 doesn't have same property
        }
        return true // if we've gotten through all the properties and they're the same
    }
    return false; //if it's not an object and not ===

}

let tense1 = {};
let tense2 = tense1;
let tense3 = {};
let tense4 = {t:1, u:2, v:3, p:2, j:{w:2} };
let tense5 = {t:1, u:2, v:3, p:2, j:{w:3} };
let tense6 = {t:1, u:2, v:3, p:2, j:{w:3} };
console.log(deepEquals(null, tense5));   //false
console.log(deepEquals(null, null));     //true 
console.log(deepEquals(4, 4));           //true 
console.log(deepEquals(4, "4"));         //false
console.log(deepEquals(tense1, tense2)); //true 
console.log(deepEquals(tense1, tense3)); //true 
console.log(deepEquals(tense1, tense4)); //false
console.log(deepEquals(tense4, tense5)); //false
console.log(deepEquals(tense5, tense6)); //true 

//note to self: 90% of the time I spent on this was about one mixed up expression.
//learn to use the damned debugger.