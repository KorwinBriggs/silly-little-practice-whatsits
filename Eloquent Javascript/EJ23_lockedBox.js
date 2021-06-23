/*
Eloquent Javascript, page 142, take a pre-made "locked box" object that throws an error
if you try to get its content while locked == true.
Write a function withBoxUnlocked that unlocks, runs a function, and relocks.
And if the box was already unlocked, it just leaves it unlocked.
*/


const box = {
    locked: true,
    unlock() { 
        this.locked = false; 
    }, 
    lock() {
        this.locked = true; 
    }, 
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content; 
    }
};
    

function withBoxUnlocked(doThis) {
    let wasLocked = box.locked;
    box.unlock();
    doThis;
    if (wasLocked) box.lock();
}

//tests:
box.lock();
withBoxUnlocked(console.log("Done")); //Done
console.log(box.locked); //true

box.unlock();
withBoxUnlocked(console.log("Done")); //Done
console.log(box.locked); //false