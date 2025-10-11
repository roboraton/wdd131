// Datos (objetos + arrays + métodos)
const services = [
  { id: 1, name: "Web Development", price: 800, tag: "web" },
  { id: 2, name: "Automation", price: 600, tag: "auto" },
  { id: 3, name: "Integrations", price: 700, tag: "api" },
];

// Render (DOM select + template literals + array methods)
const listEl = document.querySelector("#services-list");
function renderServices(items = services) {
  listEl.innerHTML = items.map(s =>
    `<article class="service-card">
       <h3>${s.name}</h3>
       <p>From $${s.price}</p>
       <button class="btn btn--sm" data-id="${s.id}">Quote</button>
     </article>`
  ).join("");
}
renderServices();

// Evento + condicionales
listEl.addEventListener("click", (e) => {
  if (!e.target.matches("button[data-id]")) return;
  const id = Number(e.target.dataset.id);
  const service = services.find(s => s.id === id);
  const note = service.price >= 700
    ? "Premium scope. I'll follow up with options."
    : "Great starter package. Fast delivery.";
  alert(`${service.name} selected. ${note}`);
});

// Filtro simple (array method + DOM)
const filterEl = document.querySelector("#filter");
filterEl?.addEventListener("change", () => {
  const v = filterEl.value;
  const filtered = v === "all" ? services : services.filter(s => s.tag === v);
  renderServices(filtered);
});

// Form + localStorage
const form = document.querySelector("#contact-form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // guarda prospecto
  const leads = JSON.parse(localStorage.getItem("leads") || "[]");
  leads.push({ ...data, ts: Date.now() });
  localStorage.setItem("leads", JSON.stringify(leads));
  // feedback accesible
  const msg = document.querySelector("#form-msg");
  msg.textContent = `Thanks, ${data.name}. I'll reply to ${data.email}.`;
  form.reset();
});

// menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});
