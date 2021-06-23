/*
Eloquent Javascript, page 215, make a new command, 'set', which is like define, except
that if the variable name exists outside of the local scope, instead of instantiating a new
local variable of the same name, it'll simply change the value of the original.

If the variable doesn't exist, it should throw a reference error.

I eventually looked up the solution to this one, and it turned out I'd initially
misunderstood the question, so the lesson here is to read requirements more carefully.
*/

specialForms.set = (args, scope) => {  
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("Incorrect use of set");
    }

    let thisValue = evaluate(args[1], scope);
    let thisName = arts[0].name;

    for (let currentScope = scope; currentScope; currentScope = Object.getPrototypeOf(currentScope)) {
        if (Object.prototype.hasOwnProperty.call(currentScope, thisName)) {
            currentScope[thisName] = thisValue;
            return thisValue;
        }
    }
    throw new ReferenceError(`${thisName} has not been defined`);
};
