function calculateSum() {
  var number = parseInt(document.getElementById('numberInput').value);
  var sum = 0;

  if (number <= 0 || isNaN(number)) {
    document.getElementById('result').innerHTML =
      '<p>Please enter a positive integer.</p>';
    return;
  }

  for (var i = 1; i <= number; i++) {
    sum += i;
  }

  document.getElementById('result').innerHTML =
    '<p>The sum of natural numbers up to ' + number + ' is ' + sum + '.</p>';
}
