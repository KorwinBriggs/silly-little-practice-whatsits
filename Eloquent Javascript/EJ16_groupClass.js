/*
Eloquent Javascript, page 115, make a class called Group that basically does
more or less what Set does - holds a list of values.
Add() adds new (and only non-duplicate) values to the group
delete() removes values, returns a boolean

and then add a static from() method to make an iterable object into a group

And for personal interest, I made it so you can populate the Group with
as many arguments as you like.
*/


class Group {
    constructor(...items) {
        this.collection = [];
        items.forEach((item, num) => {
            this.add(item);
        });
    }

    add(item) {
        if ( !this.collection.includes(item) )
            this.collection.push(item);
    }

    delete(item) {
        if ( this.collection.includes(item) ) {
            this.collection.splice( this.collection.indexOf(item), 1 );
            return true;
        }
        else return false
    }

    static from(items) {   
        let newGroup = new Group();
        items.forEach( item => newGroup.add(item) );
        return newGroup;
    }
}

group1 = new Group();
group2 = new Group(1,2,3,3,4,5);
group3 = Group.from([1,2,3,4,5]);

console.log(group1.collection);
console.log(group2.collection);
console.log(group3.collection);

group1.add(2);
group2.add(2);
group1.delete(3);
group2.delete(3);

console.log(group1.collection);
console.log(group2.collection);