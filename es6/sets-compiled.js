/*
Copied from example at:
https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f
*/

'use strict';

var s = new Set([1, 2, 3, 4, 4]);
s['delete'](1);
s.add(5);

console.log('size: ' + s.size);
console.log('has 1?' + s.has(1));
console.log('has 4?' + s.has(4));

//forEach((value, key, set) => console.log(value, key, set));

//iterable
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

//iterable values
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = s.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var value = _step2.value;

    console.log(value);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
      _iterator2['return']();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

//iterable keys
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = s.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var value = _step3.value;

    console.log(value);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
      _iterator3['return']();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}
