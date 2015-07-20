

/*function talk(words) {
    console.log(words);
}

function *my_generator() {
    yield;
    talk(yield);
}*/
/*
generator('some words');
generator('more words');
*/

/*
// note: `foo(..)` here is NOT a generator!!
function foo(x) {
    console.log("x: " + x);
}

function *bar() {
    yield; // just pause
    foo( yield ); // pause waiting for a parameter to pass into `foo(..)`
}

var caller = bar('blah');

console.log('first call.');
console.log(caller.next('first'));
console.log('second call.');
console.log(caller.next('second'));
*/
/*
function *my_generator() {
    for (var i=0; i < 10; i++) {
        yield i;
    }
    return 10;
}

for (var caller of my_generator()) {
    console.log(caller());
}
*/

/*
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log( v );
}
// 1 2 3 4 5

console.log( v ); // still `5`, not `6` :(
*/

"use strict";

var marked0$0 = [range].map(regeneratorRuntime.mark);
function range(start, end, step) {
    return regeneratorRuntime.wrap(function range$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (!(start < end)) {
                    context$1$0.next = 6;
                    break;
                }

                context$1$0.next = 3;
                return start;

            case 3:
                start += step;
                context$1$0.next = 0;
                break;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = range(0, 10, 2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
