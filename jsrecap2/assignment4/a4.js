function sortArray(numbers) {
  var sortedNumbers = numbers.slice().sort(function (a, b) {
    return a - b;
  });
  return sortedNumbers;
}

var numbers = [5, 12, 8, 3, 10];

console.log('Original Array:', numbers);

var sortedNumbers = sortArray(numbers);

console.log('Sorted Array:', sortedNumbers);
