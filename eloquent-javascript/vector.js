function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vector) {
	var resultVector, x, y;
	x = this.x + vector.x;
	y = this.y + vector.y;
	resultVector = new Vector(x, y);
	return resultVector;
}

Vector.prototype.minus = function(vector) {
	var resultVector, x, y;
	x = this.x - vector.x;
	y = this.y - vector.y;
	resultVector = new Vector(x, y);
	return resultVector;
}

Object.defineProperty(Vector.prototype, 'length', {
	get: function() {
		return Math.sqrt(this.x*this.x + this.y*this.y);	
	}
});
var v = new Vector(1,1);
var v2 = new Vector(1, 4);
console.log('v length: ' + v.length);
console.log('v2 length: ' + v2.length);
console.log('v + v2 length: ' + v.plus(v2).length);
console.log('v2 - v length: ' + v2.minus(v).length);

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// 5