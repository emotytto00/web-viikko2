document.addEventListener('DOMContentLoaded', function () {
  const targetElement = document.getElementById('target');

  const browserInfo =
    navigator.userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    ) || [];
  const browserName = browserInfo[1].replace(/\b(trident|msie)\b/g, 'IE');
  const browserVersion = parseInt(browserInfo[2]);
  const browserDetails = `${browserName}, ${browserVersion}`;

  const osName = navigator.platform;

  const screenWidth = screen.width;
  const screenHeight = screen.height;

  const availableScreenWidth = screen.availWidth;
  const availableScreenHeight = screen.availHeight;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const dateFormatter = new Intl.DateTimeFormat('fi-FI', options);
  const currentTime = dateFormatter.format(new Date());

  targetElement.innerHTML = `
      <p>Browser: ${browserDetails}</p>
      <p>Operating System: ${osName}</p>
      <p>Screen Width: ${screenWidth} pixels</p>
      <p>Screen Height: ${screenHeight} pixels</p>
      <p>Available Screen Space: ${availableScreenWidth}x${availableScreenHeight} pixels</p>
      <p>Current Date and Time: ${currentTime}</p>
  `;
});
