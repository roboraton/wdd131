const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastmodified");

const today = new Date();
year.textContent = `${today.getFullYear()}`;

lastModified.textContent = document.lastModified;

const hamButton = document.querySelector("#menuBtn");
const navigation = document.querySelector("nav ul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

function toggleMenu() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("open");
}

