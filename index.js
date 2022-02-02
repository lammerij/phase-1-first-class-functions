function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function name() {
    console.log("This is a named function");
  };
}
function returnsAnAnonymousFunction() {
  return function () {};
}
