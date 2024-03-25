function calculateDistance() {
  var input = document.getElementById('coordinatesInput').value;
  var coordinates = input.split(',');

  var x1 = parseFloat(coordinates[0]);
  var y1 = parseFloat(coordinates[1]);
  var x2 = parseFloat(coordinates[2]);
  var y2 = parseFloat(coordinates[3]);

  var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  distance = distance.toFixed(2); // Round to 2 decimal places

  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p>The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance} units.</p>`;
}
