
const dropdown = document.getElementById("menu");
const nav = document.getElementsByTagName("nav")[0];

nav.addEventListener('click', () => {
  nav.classList.toggle('opened');

  if (dropdown.classList.contains("visible")) {
    dropdown.classList.remove("visible");
    nav.style.height = "50px";
  } else {
    dropdown.classList.add("visible");
    nav.style.height = "250px";
  }
});

dropdown.addEventListener("transitionend", () => {
  if (!dropdown.classList.contains("visible")) {
    nav.style.height = "50px";
  }
});