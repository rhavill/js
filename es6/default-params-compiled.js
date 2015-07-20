'use strict';

function echo() {
    var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    console.log(text);
}

echo();
echo('custom text');
