"use strict";

function plus(x, y) {
	return x + y;
}

console.log(plus.apply(undefined, [1, 2]));

var a = [2, 3];

console.log(plus.apply(undefined, a));
