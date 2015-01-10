// Examples copied from:
// Mozilla Developer Network
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

var numbers = [1, 4, 9];
console.log('Before: ' + numbers);
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]
console.log('After: ' + roots);

var numbers = [1, 4, 9];
console.log('Before: ' + numbers);
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]
console.log('After: ' + doubles);

var str = '12345';
var reversed = [].map.call(str, function(x) {
  return x;
}).reverse().join(''); 

// Output: '54321'
console.log(reversed);