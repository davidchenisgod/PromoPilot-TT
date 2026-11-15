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
const whatsappNumber = "18687138319";

form?.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

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

  const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  note.textContent = "WhatsApp should open with your enquiry ready. Please press Send in WhatsApp to deliver it to PromoPilot TT.";
});
