function displayDateModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedSpan = document.getElementById('displayDateModified');
    lastModifiedSpan.textContent = lastModified.toLocaleString();
}

window.onload = function() {
    displayDateModified();
}


const temperature = 10; 
const windSpeed = 20;


function calculateWindChill(temperature, windSpeed) { 
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

window.onload = function() {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById('windChill').textContent = `Windchill: ${windChill.toFixed(2)}°C`;
}

