// Current year and last modification
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastmodified");

const today = new Date();
year.textContent = `${today.getFullYear()}`;
lastModified.textContent = document.lastModified;

// --- Product array ---
const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];

// --- Populate the Product Name select ---
const productSelect = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});


// --- Form submission handler ---
const form = document.getElementById("reviewForm");

form.addEventListener("submit", () => {
  // Just before submission, store a flag that form was submitted.
  // The review.html page will handle incrementing the counter.
  localStorage.setItem("formSubmitted", "true");
});
