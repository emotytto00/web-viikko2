var numbers = [];

do {
  var input = prompt("Enter a number (or 'done' to finish):");
  if (input.toLowerCase() !== 'done') {
    var number = parseInt(input);
    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert("Invalid input! Enter a valid number or 'done' to finish.");
    }
  }
} while (input.toLowerCase() !== 'done');

var evenNumbers = [];
for (var num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length > 0) {
  console.log('Even Numbers:', evenNumbers.join(', '));
} else {
  console.log('Even Numbers: None');
}

console.log('End of program.');
