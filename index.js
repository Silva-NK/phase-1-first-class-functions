function receivesAFunction(callback) {
    console.log(callback());
}



function returnsANamedFunction() {
    function callback() {
        console.log("This is a named function")
    }
    return callback;
}



function returnsAnAnonymousFunction() {
    return function() {
        console.log ("This is an anonymous function!")
    };
}