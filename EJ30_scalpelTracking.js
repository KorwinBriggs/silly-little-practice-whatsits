/*
Eloquent Javascript, page 201, use the network code from this chapter's
complex crow-nest-computation metaphor to write a function that finds
the crows' communal scalpel.

Each nest should have a record under anyStorage.scalpel that shows the
last place that nest remembers it being sent, while the nest that has it will
list its own location. 

And I'm supposed to do it once with async/await and once with normal promises.

A PUBLIC SERVICE ANNOUNCEMENT:
I like Eloquent Javascript, but this chapter kicked my ass.
I appreciate the effort the author made to present it all via a metaphor,
but I think the whole crow-computing thing only made it tougher for me.
If you're like me, try reading through https://javascript.info/callbacks
*/


async function locateScalpel1(nest) {
    let thisNest = nest.name;
    while(true) {
        let nextNest = await anyStorage(nest, thisNest, "scalpel");
        if (nextNest == thisNest) return thisNest;
        thisNest = nextNest;
    }
}

/*
Honestly, I spent a full day screwing around, and I'm sick of working
with crow-net, so here's the second answer from the book:
*/

function locateScalpel2(nest) {
    function loop(current) {
        return anyStorage(nest, current, "scalpel").then(next => {
        if (next == current) return current;
        else return loop(next);
        });
    }
    return loop(nest.name);
}

