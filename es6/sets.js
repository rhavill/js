'use strict';

/*
Copied from example at:
https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f
*/

let s = new Set([1, 2, 3, 4, 4]);
s.delete(1);
s.add(5);

console.log('size: ' + s.size);
console.log('has 1?'+s.has(1));
console.log('has 4?'+s.has(4));

//forEach((value, key, set) => console.log(value, key, set));


//iterable
for (let value of s) {
  console.log(value);
}
 
//iterable values
for (let value of s.values()) {
  console.log(value);
}
 
//iterable keys
for (let value of s.keys()) {
  console.log(value);
}
