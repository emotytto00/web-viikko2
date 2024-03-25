function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function convertTemperature() {
  var celsius = parseFloat(document.getElementById('celsiusInput').value);
  var fahrenheit = celsiusToFahrenheit(celsius).toFixed(2);
  var kelvin = celsiusToKelvin(celsius).toFixed(2);

  var resultsDiv = document.getElementById('conversionResults');
  resultsDiv.innerHTML = `
      <h2>Conversion Results</h2>
      <p><strong>Celsius:</strong> ${celsius} °C</p>
      <p><strong>Fahrenheit:</strong> ${fahrenheit} °F</p>
      <p><strong>Kelvin:</strong> ${kelvin} K</p>
  `;
}
