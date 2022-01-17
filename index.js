function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function ANamedFunction(){};

}

function returnsAnAnonymousFunction() {
    return function () {};
}