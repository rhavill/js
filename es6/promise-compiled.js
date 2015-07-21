'use strict';

var promise = new Promise(function (resolve, reject) {
	var r = Math.random();
	if (r >= .5) {
		resolve(r);
	} else {
		reject(r);
	}
});

promise.then(function (x) {
	console.log('Success: ' + x);
}, function (x) {
	console.log('Fail: ' + x);
});
