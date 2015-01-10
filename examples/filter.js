var numbers = [1, 4, 9];
console.log('Before: ' + numbers);
function isBigEnough(element) {
  return element >= 10;
}
var filtered = numbers.filter(isBigEnough);
// filtered is [12, 130, 44]
console.log('filtered: ' + filtered);
