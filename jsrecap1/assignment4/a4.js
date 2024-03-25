function calculateGrade() {
  var score = parseFloat(document.getElementById('scoreInput').value);

  if (score >= 0 && score <= 39) {
    document.getElementById('result').innerHTML = '<p>Your grade is 0.</p>';
  } else if (score >= 40 && score <= 51) {
    document.getElementById('result').innerHTML = '<p>Your grade is 1.</p>';
  } else if (score >= 52 && score <= 63) {
    document.getElementById('result').innerHTML = '<p>Your grade is 2.</p>';
  } else if (score >= 64 && score <= 75) {
    document.getElementById('result').innerHTML = '<p>Your grade is 3.</p>';
  } else if (score >= 76 && score <= 87) {
    document.getElementById('result').innerHTML = '<p>Your grade is 4.</p>';
  } else if (score >= 88 && score <= 100) {
    document.getElementById('result').innerHTML = '<p>Your grade is 5.</p>';
  } else {
    document.getElementById('result').innerHTML =
      '<p>Invalid score. Please enter a score between 0 and 100.</p>';
  }
}
