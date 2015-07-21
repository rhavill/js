'use strict';

function adder(text) {
	var sum = 0;

	for (var _len = arguments.length, nums = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		nums[_key - 1] = arguments[_key];
	}

	for (var i in nums) {
		sum += nums[i];
	}
	return sum;
}

console.log(adder('hi', 1, 2, 3, 4));
