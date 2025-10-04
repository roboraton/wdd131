// Current year and last modification
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastmodified");

const today = new Date();
year.textContent = `${today.getFullYear()}`;
lastModified.textContent = document.lastModified;

// Hamburguer
const hamButton = document.querySelector("#menuBtn");
const navigation = document.querySelector("nav ul");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "McAllen Texas",
    location: "McAllen, Texas, United States",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl:
      "images/mcallen-temple.jpg"
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl:
      "images/calgary-temple.jpg"
  },
  {
    templeName: "Tampico Mexico",
    location: "Madero City, Tamaulipas, Mexico",
    dedicated: "2000, May, 20",
    area: 10700,
    imageUrl:
      "images/tampico-temple.jpg"
  }
];

const gallery = document.querySelector("section.gallery");

function renderTemples(list) {
  gallery.innerHTML = ""; // this is for cleaning
  list.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add("temple-card");

    let name = document.createElement("h2");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    let area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    gallery.appendChild(card);
  });
}

// Show all
renderTemples(temples);

// Menu Filters
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = e.target.textContent;
    let filtered = temples;

    switch (filter) {
      case "Old":
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        break;
      case "New":
        filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        break;
      case "Large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "Small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      case "Home":
      default:
        filtered = temples;
    }
    renderTemples(filtered);
  });
});
