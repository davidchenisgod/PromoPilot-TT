const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelectorAll("[data-package]").forEach(link => link.addEventListener("click", () => {
  const select = document.querySelector("#package");
  if (select) select.value = link.dataset.package;
}));
document.querySelector("#year").textContent = new Date().getFullYear();
const form = document.querySelector("#enquiry-form");
const note = document.querySelector("#form-note");
form?.addEventListener("submit", async event => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    "Hello PromoPilot TT! I'd like to enquire about your services.",
    "",
    "Name: " + data.get("name"),
    "Business: " + data.get("business"),
    "Contact: " + data.get("contact"),
    "Package: " + data.get("package"),
    "What I'd like to promote: " + (data.get("details") || "I'd like to discuss this.")
  ].join("\n");
  try {
    await navigator.clipboard.writeText(message);
    note.textContent = "Enquiry copied! Paste it into your preferred messaging app to send it to PromoPilot TT. Our contact channel will be published here shortly.";
  } catch {
    note.textContent = "Your enquiry is ready below. Copy the text and send it through your preferred messaging app once our contact channel is published.";
    window.prompt("Copy your enquiry:", message);
  }
});