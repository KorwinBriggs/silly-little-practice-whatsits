/*
Eloquent Javascript, page 115, make a silly little vector class -
but only a 2D vector, with x and y parameters, plus and minus methods, 
and a getter property that returns the length from 0, 0.

(Which means I'll also have to remember how triangles work)
*/

class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus(newVector) {
        return Vec(x + newVector.x, y + newVector.y);
    }

    minus(newVector) {
        return Vec(x - newVector.x, y - newVector.y);
    }

    get length() {
        return Math.sqrt(( this.x * this.x ) + ( this.y * this.y));
    }
}

testVec1 = new Vec(3, 4);
console.log(testVec1.length)