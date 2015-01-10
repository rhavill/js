var numbers = [1, 4, 9];
console.log('Before: ' + numbers);
var total = numbers.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
console.log('sum: ' + total);
