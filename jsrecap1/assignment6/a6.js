function generateMultiplicationTable() {
  var number = parseInt(document.getElementById('numberInput').value);

  if (isNaN(number) || number <= 0) {
    alert('Please enter a positive integer.');
    return;
  }

  var tableHTML = '<table>';

  for (var i = 1; i <= number; i++) {
    tableHTML += '<tr>';
    for (var j = 1; j <= number; j++) {
      tableHTML += '<td>' + i * j + '</td>';
    }
    tableHTML += '</tr>';
  }

  tableHTML += '</table>';

  document.getElementById('multiplicationTable').innerHTML = tableHTML;
}
