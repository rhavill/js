"use strict";

var cube = function cube(x) {
  return x * x * x;
};
var plus = function plus(x, y) {
  return x + y;
};
var three = function three() {
  return 3;
};

console.log(cube(3));
console.log(plus(1, 1));
console.log(three());
