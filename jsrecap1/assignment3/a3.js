function classifyTriangle() {
  var side1 = parseFloat(document.getElementById('side1').value);
  var side2 = parseFloat(document.getElementById('side2').value);
  var side3 = parseFloat(document.getElementById('side3').value);

  if (side1 === side2 && side2 === side3) {
    document.getElementById('result').innerHTML =
      '<p>This is an equilateral triangle.</p>';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    document.getElementById('result').innerHTML =
      '<p>This is an isosceles triangle.</p>';
  } else {
    document.getElementById('result').innerHTML =
      '<p>This is a scalene triangle.</p>';
  }
}
