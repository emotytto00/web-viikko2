var numbers = [];

for (var i = 1; i <= 5; i++) {
  var number = parseInt(prompt('Enter Number ' + i + ':'));
  numbers.push(number);
}

console.log('Numbers:', numbers);

var searchNumber = parseInt(prompt('Enter a Number to Search:'));
if (numbers.includes(searchNumber)) {
  console.log('Number', searchNumber, 'is found in the array.');
} else {
  console.log('Number', searchNumber, 'is not found in the array.');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort(function (a, b) {
  return a - b;
});

console.log('Sorted Numbers:', numbers);
