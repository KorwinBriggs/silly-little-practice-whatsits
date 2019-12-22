/*
Eloquent Javascript, page 179 -- NOT A PROGRAM; just a question about program structure:

CommonJS modules allow for circular dependencies, so long as the modules in question don't
replace their default exports object, and don't use each other's interfaces until after
loading.

(sidenote: I love this)

The require function from earlier in the chapter looks like this: */

function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name); //NOTE: readFile is a made-up function, used only for explanation
        let module = {exports: {} }; //new object for exports
        require.cache[name] = module; //which is now under require.cache.moduleName
        let wrapper = Function("require, exports, module", code); //wrapper now a function that takes to strings
        wrapper(require, module.exports, module); //
    }
    return require.cache[name].exports; 
}

/* QUESTIONS:

How does it handle cycles of dependency? 
The check in the first if statement should prevent an endless loop. As long as something's already
loaded, it should be in require.cache, and therefore won't be loaded again, ending the cycle.

What happens if a module does replace its default exports object?
I think, in that case, whichever module is loaded second would have replaced 
both modules' exports objects?


*/

