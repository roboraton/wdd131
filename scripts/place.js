const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastmodified");

const today = new Date();
year.textContent = `${today.getFullYear()}`;
lastModified.textContent = document.lastModified;

function calculateWindChill(tempC, speed) {
    if (tempC <= 10 && speed > 4.8) {
        return Math.round(
            13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16))
        );
    } else {
        return "N/A";
    }
}

// Static values for demonstration
const temp = 25; // Temperature in °C
const windSpeed = 15; // Wind speed in km/h

// HTML call
const windChill = calculateWindChill(temp, windSpeed);
document.getElementById("windchill").textContent = windChill;
