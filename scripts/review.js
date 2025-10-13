// Current year and last modification
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastmodified");

const today = new Date();
year.textContent = `${today.getFullYear()}`;
lastModified.textContent = document.lastModified;

// --- Review counter ---
const reviewCountEl = document.getElementById("reviewCount");

// Get the current count from localStorage, or start at 0
let count = Number(localStorage.getItem("reviewCount")) || 0;

// If form was submitted, increase count
if (localStorage.getItem("formSubmitted") === "true") {
  count++;
  localStorage.setItem("reviewCount", count);
  localStorage.removeItem("formSubmitted");
}

// Display the current count
reviewCountEl.textContent = count;

