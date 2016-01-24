'use strict';

/* this example was copied from http://davidwalsh.name/es6-generators */
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log( v );
}
// 1 2 3 4 5

console.log( v ); // still `5`, not `6` :(


/* this example was copied from https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f */
function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}
 
for (let i of range(0, 10, 2)) {
  console.log(i);
}

