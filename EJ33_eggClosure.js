/*
Eloquent Javascript, page 214 -- Another non-programming question:

Egg functions are able to see values from their surrounding scope.
Go back to the definition of the fun form (that is, specialForms.fun)
and explain why that is.

The answer is that this Egg programming language is mostly just shuffling
around javascript's syntax. All specialForms.fun does is repackage an
Egg syntax function into a javascript syntax function, evaluate it in
javascript, and return whatever's returned. Since javascript functions
can see the scope around them, so can Egg funs.

specialForms.fun is below, with my comments for reference:
*/

specialForms.fun = (args, scope) => {
    if (!args.length) { //test for no arguments
      throw new SyntaxError("Functions need a body");
    }
    let body = args[args.length - 1]; //list arguments, without scope (which is what the book calls the body of the function)
    let params = args.slice(0, args.length - 1).map(expr => {
      if (expr.type != "word") {
        throw new SyntaxError("Parameter names must be words");
      }
      return expr.name; //assuming no errors, fill the params array with the .names of the args.
    });
  
    return function() {
      if (arguments.length != params.length) {
        throw new TypeError("Wrong number of arguments"); //should only happen if an arg didn't get parsed correctly?
      }
      let localScope = Object.create(scope); //and now we're just creating and resolving a javascript function.
      for (let i = 0; i < arguments.length; i++) {
        localScope[params[i]] = arguments[i];
      }
      return evaluate(body, localScope);
    };
  };