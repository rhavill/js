// Mozilla Developer Network has some good examples

function sum(a, b) {
	return a + b + this.x;
}

var obj = {
	x: 1,
	y: 2
};

console.log(sum.call(obj, 2, 3));
console.log(sum.apply(obj, [2, 3]));

var sumWrapper = sum.bind(obj, 1, 2);
console.log(sumWrapper());