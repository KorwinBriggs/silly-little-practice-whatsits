/*
Eloquent Javascript, page 127, make something like the Group class
from the last chapter's exercises, except make its methods return new Groups,
the way Array methods return new Arrays, rather than altering the original Group.
*/


class PGroup {
    constructor(...items) {
        this.collection = [];
        items.forEach( item => {
            if ( !this.has(item) ) {
                this.collection.push(item);
            }
        })
    }

    has(item) {
        return this.collection.includes(item);
    }

    add(item) { //returns new PGroup, with the item added on (if it's not already there)
        let newGroup = PGroup.from(this.collection);
        if (!newGroup.has(item)) newGroup.collection.push(item);
        return newGroup;
    }

    delete(item) { //returns new PGroup, without the item
        let newGroup = PGroup.from(this.collection);
        if (newGroup.has(item)) newGroup.collection.splice( newGroup.collection.indexOf(item), 1);
        return newGroup;
    }

    static from(items) {   
        let newGroup = new PGroup();
        items.forEach( item => newGroup.collection.push(item) );
        return newGroup;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}


class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if ( this.index == this.group.collection.length ) {  //if we've already iterated over everything
            return {value: undefined, done: true};
        }
        
        let value = {value: this.group.collection[this.index], done:false} //making an object {value:____, done:false}
        this.index++; // incrementing index so when next is called again it gives the next value
        return value;
    }

}


let group1 = new PGroup();
let group2 = new PGroup(1,2,3,3,4,5,'ten');
let group3 = PGroup.from([1,2,3,4,5]);

console.log(group1.collection);
console.log(group2.collection);
console.log(group3.collection);

console.log(group1.has(1));
console.log(group2.has(1));

group1 = group1.add(2);
group2 = group2.add(6);
group1 = group1.delete(3);
group2 = group2.delete(3);

console.log(group1.collection);
console.log(group2.collection);