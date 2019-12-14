/*
Eloquent Javascript, page 115, take the Group class I made in the last exercise,
and make it iterable. If I do this right, I should be able to make a Group.from(anotherGroup);

And there's a specific note saying that if I used an array to store the group's
values (which I did) then I shouldn't use the Symbol.iterator method of the Array,
because that would defeat the whole point of the exercise.
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



group1 = new Group();
group2 = new Group(1,2,3,3,4,5,'ten');
group3 = Group.from([1,2,3,4,5]);

console.log(group1.collection);
console.log(group2.collection);
console.log(group3.collection);

for (let value of group2) console.log(value);

group1.add(2);
group2.add(2);
group1.delete(3);
group2.delete(3);

console.log(group1.collection);
console.log(group2.collection);
