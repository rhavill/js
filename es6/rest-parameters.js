'use strict';

function adder(text, ...nums) {
	var sum = 0;
	for (var i in nums) {
		sum += nums[i];
	}
	return sum;
}

console.log(adder('hi',1,2,3,4));