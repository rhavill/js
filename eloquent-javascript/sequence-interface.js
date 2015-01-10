function logFive(sequence) {
	var length = sequence.count();
	for (var i = 0; i < 5 && i < length; i++) {
		console.log(sequence.current());
		sequence.next();
	}
}

function ArraySeq(list) {
	this.list = list;
	this.position = 0;
}
ArraySeq.prototype.count = function() {
	return this.list.length;
}
ArraySeq.prototype.current = function() {
	return this.list[this.position];
}
ArraySeq.prototype.next = function() {
	if (this.position < this.list.length - 1) {
		this.position++;
	}
}

function RangeSeq(from, to) {
	this.from = from;
	this.to = to;
	this.currentInteger = from;
}
RangeSeq.prototype.count = function() {
	var count = Math.abs(this.from - this.to) + 1;
	return count;
}
RangeSeq.prototype.current = function() {
	return this.currentInteger;
}
RangeSeq.prototype.next = function() {
	if (this.currentInteger < this.to) {
		this.currentInteger++;
	}
}

var list = [8,6,7,5,3,0,9];
var seq = new ArraySeq(list);
//logFive(seq);
var seq2 = new RangeSeq(-1,3);
logFive(seq2);
