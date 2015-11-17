function plusX(x) {
	return function plus(y) {
		return x + y;
	}
}

var plus2 = plusX(2);

console.log(plus2(2));
console.log(plus2(0));

console.log(plusX(2)(3));