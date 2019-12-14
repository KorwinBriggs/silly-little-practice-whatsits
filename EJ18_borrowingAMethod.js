/*
Eloquent Javascript, page 116, borrow a method - 
in short, can I think of a way to call hasOwnProperty() (an Object prototype property) on an object that has
its own property by that name
*/



testObject1 = {testProperty: "it works!"}

testObject2 = {
    testProperty: "it works!",
    hasOwnProperty(string) {
        return "it doesn't work!"
    }
}

//tests
console.log(testObject1.hasOwnProperty('testProperty')); //true

console.log(testObject2.hasOwnProperty('testProperty')); //it doesn't work!

if (Object.prototype.hasOwnProperty.call(testObject2, 'testProperty')) {
    console.log(testObject2.testProperty); //it works!
}


//Honestly, I think the challenge here was more about google than anything else.
//By which I mean I don't think the book ever mentioned the call() method




